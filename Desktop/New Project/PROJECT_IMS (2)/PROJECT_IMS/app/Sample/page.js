// // pages/students.js
// "use client";
// import React, { useState } from "react";
// import Head from "next/head";

// const students = [
//   { id: 1, name: "John Doe", scholarship: 1000 },
//   { id: 2, name: "Jane Smith", scholarship: 2000 },
//   { id: 3, name: "Alice Johnson", scholarship: 1200 },
// ];

// const Page = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [studentsPerPage] = useState(2); // Adjust the number of students per page as needed

//   // Search functionality
//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = filteredStudents.slice(
//     indexOfFirstStudent,
//     indexOfLastStudent
//   );

//   // Calculate total scholarship amount
//   const totalScholarship = filteredStudents.reduce(
//     (total, student) => total + parseInt(student.scholarship),
//     0
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="mt-32">
//       <Head>
//         <title>Student Scholarship Records</title>
//       </Head>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-4">Student Scholarship Records</h1>
//         <div className="flex justify-between mb-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             className="px-4 py-2 border border-gray-300 rounded-md mr-4"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <p className="text-lg font-semibold">
//             Total Scholarship Amount: ${totalScholarship}
//           </p>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {currentStudents.map((student) => (
//             <div key={student.id} className="bg-gray-100 p-4 rounded-md">
//               <h2 className="text-lg font-semibold mb-2">{student.name}</h2>
//               <p className="text-gray-600">
//                 Scholarship: ${student.scholarship}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Pagination */}
//         <div className="mt-8">
//           <ul className="flex">
//             {Array.from(
//               { length: Math.ceil(filteredStudents.length / studentsPerPage) },
//               (_, i) => (
//                 <li key={i} className="mr-2">
//                   <button
//                     className={`px-4 py-2 ${
//                       currentPage === i + 1
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } rounded-md`}
//                     onClick={() => paginate(i + 1)}
//                   >
//                     {i + 1}
//                   </button>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useState } from "react";

const Page = () => {
  const [studentName, setStudentName] = useState("");
  const [feesAmount, setFeesAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!studentName.trim() || !feesAmount.trim()) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    // Simulating asynchronous submission
    try {
      // Simulating asynchronous API call
      setTimeout(() => {
        setSuccessMessage("Fees submitted successfully");
        setStudentName(""); // Reset form fields
        setFeesAmount("");
      }, 1000);
    } catch (error) {
      setErrorMessage("Error submitting fees");
    }
  };

  return (
    <>
      <div className="mt-20">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5">
          <div className="mb-4">
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700"
            >
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="feesAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Fees Amount
            </label>
            <input
              type="number"
              id="feesAmount"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={feesAmount}
              onChange={(e) => setFeesAmount(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
