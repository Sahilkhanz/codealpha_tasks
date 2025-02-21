"use client";

import Navbar from "./Dashboard/Navbar";
import Sidebar from "./Dashboard/Sidebar";

export default function Home() {
  return (
    <>
      <div className="mt-14">
        <Navbar />
        <Sidebar />
      </div>
    </>
  );
}
