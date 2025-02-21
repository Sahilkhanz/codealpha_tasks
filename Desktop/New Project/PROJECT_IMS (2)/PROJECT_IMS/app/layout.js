import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Dashboard/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | Student section",
  description: "Government Polytechnic Dehardun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
