
// Name: Sahil Khan
// Program: Student Grade Tracker with File Output
// Description: Console-based app to input student grades, display summary, and save report to a file
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

class Student {

    String name;
    double grade;

    Student(String name, double grade) {
        this.name = name;
        this.grade = grade;
    }
}

public class StudentGradeTracker {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Student> students = inputStudents(sc);
        if (students.isEmpty()) {
            System.out.println("No students entered. Exiting...");
            return;
        }

        double[] stats = calculateStats(students);
        displaySummary(students, stats);
        saveToFile(students, stats);
    }

    public static ArrayList<Student> inputStudents(Scanner sc) {
        ArrayList<Student> students = new ArrayList<>();
        System.out.print("Enter number of students: ");
        int n = 0;

        try {
            n = Integer.parseInt(sc.nextLine());
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid number.");
            return students;
        }

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for student #" + (i + 1));
            System.out.print("Name: ");
            String name = sc.nextLine();

            double grade;
            while (true) {
                System.out.print("Grade (0-100): ");
                try {
                    grade = Double.parseDouble(sc.nextLine());
                    if (grade < 0 || grade > 100) {
                        System.out.println("Grade must be between 0 and 100.");
                    } else {
                        break;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid grade. Please enter a number.");
                }
            }

            students.add(new Student(name, grade));
        }

        return students;
    }

    public static double[] calculateStats(ArrayList<Student> students) {
        double total = 0;
        double highest = Double.MIN_VALUE;
        double lowest = Double.MAX_VALUE;

        for (Student s : students) {
            total += s.grade;
            if (s.grade > highest) {
                highest = s.grade;
            }
            if (s.grade < lowest) {
                lowest = s.grade;
            }
        }

        double average = total / students.size();
        return new double[]{average, highest, lowest};
    }

    public static void displaySummary(ArrayList<Student> students, double[] stats) {
        System.out.println("\n====== Student Grade Summary ======");
        for (Student s : students) {
            String status = s.grade >= 40 ? "Pass" : "Fail";
            System.out.printf("Name: %-20s | Grade: %5.2f | Status: %s\n", s.name, s.grade, status);
        }

        System.out.println("\n--- Statistics ---");
        System.out.printf("Average Grade : %.2f\n", stats[0]);
        System.out.printf("Highest Grade : %.2f\n", stats[1]);
        System.out.printf("Lowest Grade  : %.2f\n", stats[2]);
    }

    public static void saveToFile(ArrayList<Student> students, double[] stats) {
        try {
            FileWriter writer = new FileWriter("student_report.txt");

            writer.write("====== Student Grade Summary ======\n");
            for (Student s : students) {
                String status = s.grade >= 40 ? "Pass" : "Fail";
                writer.write(String.format("Name: %-20s | Grade: %5.2f | Status: %s\n", s.name, s.grade, status));
            }

            writer.write("\n--- Statistics ---\n");
            writer.write(String.format("Average Grade : %.2f\n", stats[0]));
            writer.write(String.format("Highest Grade : %.2f\n", stats[1]));
            writer.write(String.format("Lowest Grade  : %.2f\n", stats[2]));

            writer.close();
            System.out.println("\n Report saved to 'student_report.txt'");
        } catch (IOException e) {
            System.out.println(" Error writing to file: " + e.getMessage());
        }
    }
}

// Enter number of students: 5
// Enter details for student #1
// Name: Sahil
// Grade (0-100): 95
// Enter details for student #2
// Name: Aruna  
// Grade (0-100): 88
// Enter details for student #3
// Name: Akhilesh
// Grade (0-100): 75
// Enter details for student #4
// Name: Aditya
// Grade (0-100): 63
// Enter details for student #5
// Name: Ansh
// Grade (0-100): 28
// ====== Student Grade Summary ======
// Name: Sahil                | Grade: 95.00 | Status: Pass
// Name: Aruna                | Grade: 88.00 | Status: Pass
// Name: Akhilesh             | Grade: 75.00 | Status: Pass
// Name: Aditya               | Grade: 63.00 | Status: Pass
// Name: Ansh                 | Grade: 28.00 | Status: Fail
// --- Statistics ---
// Average Grade : 69.80
// Highest Grade : 95.00
// Lowest Grade  : 28.00

//  Report saved to 'student_report.txt'
