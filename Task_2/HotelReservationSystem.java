// Name: Sahil Khan
// Program: Hotel Reservation System with GUI
// Description: Hotel room booking system using Java Swing for GUI with room types, login, date picker, cancellation, and receipt generation
// UserName = admin | Password = 1234

import java.awt.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

class Room {

    int roomNumber;
    String type;
    double price;
    boolean isBooked;

    Room(int roomNumber, String type, double price) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.isBooked = false;
    }
}

class Booking {

    String guestName;
    String roomType;
    int roomNumber;
    String date;
    double amount;

    Booking(String guestName, String roomType, int roomNumber, String date, double amount) {
        this.guestName = guestName;
        this.roomType = roomType;
        this.roomNumber = roomNumber;
        this.date = date;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Guest: " + guestName + ", Room: " + roomType + " (#" + roomNumber + ")" + ", Date: " + date + ", Paid: Rs." + amount;
    }
}

public class HotelReservationSystem {

    static ArrayList<Room> rooms = new ArrayList<>();
    static ArrayList<Booking> bookings = new ArrayList<>();
    static final String USERNAME = "admin";
    static final String PASSWORD = "1234";

    public static void main(String[] args) {
        initializeRooms();
        loadBookingsFromFile();
        SwingUtilities.invokeLater(HotelReservationSystem::createLoginGUI);
    }

    static void createLoginGUI() {
        JFrame loginFrame = new JFrame("Hotel Reservation Login");
        loginFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        loginFrame.setSize(300, 180);
        loginFrame.setLayout(new GridLayout(3, 2));

        JLabel userLabel = new JLabel("Username:");
        JTextField userField = new JTextField();
        JLabel passLabel = new JLabel("Password:");
        JPasswordField passField = new JPasswordField();
        JButton loginButton = new JButton("Login");

        loginButton.addActionListener(e -> {
            String user = userField.getText();
            String pass = new String(passField.getPassword());
            if (user.equals(USERNAME) && pass.equals(PASSWORD)) {
                loginFrame.dispose();
                createMainGUI();
            } else {
                JOptionPane.showMessageDialog(loginFrame, "Invalid credentials.", "Login Failed", JOptionPane.ERROR_MESSAGE);
            }
        });

        loginFrame.add(userLabel);
        loginFrame.add(userField);
        loginFrame.add(passLabel);
        loginFrame.add(passField);
        loginFrame.add(new JLabel());
        loginFrame.add(loginButton);

        loginFrame.setLocationRelativeTo(null);
        loginFrame.setVisible(true);
    }

    static void createMainGUI() {
        JFrame frame = new JFrame("Hotel Reservation System");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 400);
        frame.setLayout(new BorderLayout());

        DefaultTableModel tableModel = new DefaultTableModel(new Object[]{"Room No", "Type", "Price", "Available"}, 0);
        JTable roomTable = new JTable(tableModel);
        JScrollPane scrollPane = new JScrollPane(roomTable);
        frame.add(scrollPane, BorderLayout.CENTER);

        JButton viewButton = new JButton("View Rooms");
        JButton bookButton = new JButton("Book Room");
        JButton cancelButton = new JButton("Cancel Booking");
        JButton viewBookingsButton = new JButton("View Bookings");

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(viewButton);
        buttonPanel.add(bookButton);
        buttonPanel.add(cancelButton);
        buttonPanel.add(viewBookingsButton);
        frame.add(buttonPanel, BorderLayout.SOUTH);

        viewButton.addActionListener(e -> {
            tableModel.setRowCount(0);
            for (Room room : rooms) {
                tableModel.addRow(new Object[]{room.roomNumber, room.type, room.price, room.isBooked ? "No" : "Yes"});
            }
        });

        bookButton.addActionListener(e -> showBookingDialog(frame));

        cancelButton.addActionListener(e -> showCancelDialog(frame));

        viewBookingsButton.addActionListener(e -> {
            JTextArea bookingArea = new JTextArea(15, 50);
            for (Booking b : bookings) {
                bookingArea.append(b.toString() + "\n");
            }
            JOptionPane.showMessageDialog(frame, new JScrollPane(bookingArea), "All Bookings", JOptionPane.INFORMATION_MESSAGE);
        });

        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    static void showBookingDialog(JFrame parent) {
        JTextField nameField = new JTextField();
        String[] types = {"Standard", "Deluxe", "Suite"};
        JComboBox<String> typeBox = new JComboBox<>(types);

        SpinnerDateModel dateModel = new SpinnerDateModel();
        JSpinner dateSpinner = new JSpinner(dateModel);
        dateSpinner.setEditor(new JSpinner.DateEditor(dateSpinner, "dd-MM-yyyy"));

        Object[] message = {
            "Guest Name:", nameField,
            "Room Type:", typeBox,
            "Booking Date:", dateSpinner
        };

        int option = JOptionPane.showConfirmDialog(parent, message, "Book a Room", JOptionPane.OK_CANCEL_OPTION);
        if (option == JOptionPane.OK_OPTION) {
            String name = nameField.getText();
            String type = (String) typeBox.getSelectedItem();
            Date selectedDate = (Date) dateSpinner.getValue();
            SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
            String date = sdf.format(selectedDate);

            for (Room room : rooms) {
                if (!room.isBooked && room.type.equalsIgnoreCase(type)) {
                    room.isBooked = true;
                    Booking booking = new Booking(name, type, room.roomNumber, date, room.price);
                    bookings.add(booking);
                    saveBookingsToFile();
                    JOptionPane.showMessageDialog(parent, "Room Booked!\n" + booking.toString(), "Success", JOptionPane.INFORMATION_MESSAGE);
                    return;
                }
            }
            JOptionPane.showMessageDialog(parent, "No available " + type + " rooms.", "Unavailable", JOptionPane.ERROR_MESSAGE);
        }
    }

    static void showCancelDialog(JFrame parent) {
        String name = JOptionPane.showInputDialog(parent, "Enter guest name to cancel booking:");
        if (name == null || name.trim().isEmpty()) {
            return;
        }

        for (int i = 0; i < bookings.size(); i++) {
            if (bookings.get(i).guestName.equalsIgnoreCase(name)) {
                int roomNumber = bookings.get(i).roomNumber;
                bookings.remove(i);
                for (Room room : rooms) {
                    if (room.roomNumber == roomNumber) {
                        room.isBooked = false;
                        break;
                    }
                }
                saveBookingsToFile();
                JOptionPane.showMessageDialog(parent, "Booking cancelled for: " + name, "Cancelled", JOptionPane.INFORMATION_MESSAGE);
                return;
            }
        }
        JOptionPane.showMessageDialog(parent, "No booking found for: " + name, "Not Found", JOptionPane.ERROR_MESSAGE);
    }

    static void initializeRooms() {
        rooms.add(new Room(101, "Standard", 2000));
        rooms.add(new Room(102, "Standard", 2000));
        rooms.add(new Room(201, "Deluxe", 3500));
        rooms.add(new Room(301, "Suite", 5000));
    }

    static void saveBookingsToFile() {
        try (FileWriter fw = new FileWriter("hotel_bookings.txt")) {
            for (Booking b : bookings) {
                fw.write(b.guestName + "," + b.roomType + "," + b.roomNumber + "," + b.date + "," + b.amount + "\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static void loadBookingsFromFile() {
        File file = new File("hotel_bookings.txt");
        if (!file.exists()) {
            return;
        }

        try (Scanner fileScanner = new Scanner(file)) {
            while (fileScanner.hasNextLine()) {
                String[] data = fileScanner.nextLine().split(",");
                if (data.length == 5) {
                    Booking booking = new Booking(data[0], data[1], Integer.parseInt(data[2]), data[3], Double.parseDouble(data[4]));
                    bookings.add(booking);
                    for (Room room : rooms) {
                        if (!room.isBooked && room.roomNumber == booking.roomNumber) {
                            room.isBooked = true;
                            break;
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
