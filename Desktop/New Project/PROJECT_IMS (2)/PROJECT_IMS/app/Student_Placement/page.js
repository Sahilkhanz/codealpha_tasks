"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import "../style/Placement.css";
import Company from "./Company";
import Containt from "./Containt";

const placementsData = [
  {
    id: 1,
    name: "John Doe",
    company: "Google",
    package: "75 LPA",
    branch: "IT",
    father_name: "Tom Doe",
    phone: "23456709",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Amazon",
    package: "45 LPA",
    branch: "CSE",
    father_name: "R Smith",
    phone: "2345674444",
  },
  {
    id: 3,
    name: "Michael Johnson",
    company: "Honda",
    package: "50 LPA",
    branch: "Mechanical",
    father_name: "Ferguson",
    phone: "13000999",
  },
  {
    id: 4,
    name: "Ankit",
    company: "Apple",
    package: "30 LPA",
    branch: "IT",
    father_name: "Mr Mohan",
    phone: "333456709",
  },
  {
    id: 5,
    name: "Mohan",
    company: "HCL",
    package: "60 LPA",
    branch: "Electronics",
    father_name: "Ram Singh",
    phone: "456756709",
  },
  {
    id: 6,
    name: "Mona",
    company: "TCS",
    package: "50 LPA",
    branch: "CSE",
    father_name: " Mr Ramesh",
    phone: "56666709",
  },
  {
    id: 7,
    name: "Ritika",
    company: "Wipro",
    package: "70 LPA",
    branch: "IT",
    father_name: "Mr Rakesh",
    phone: "102938475",
  },
  {
    id: 8,
    name: "Mayank",
    company: "Apple",
    package: "98 LPA",
    branch: "IT",
    father_name: "Mr Raghuram",
    phone: "92817364",
  },
  {
    id: 9,
    name: "Ritik",
    company: "Infoses",
    package: "60 LPA",
    branch: "CSE",
    father_name: "Mr Anand",
    phone: "234576709",
  },
  {
    id: 10,
    name: "Rahul",
    company: "PharmaCorp",
    package: "90 LPA",
    branch: "Pharma",
    father_name: "Mr. Singh",
    phone: "9876543210",
  },
  {
    id: 11,
    name: "Amit",
    company: "CivilBuilders",
    package: "75 LPA",
    branch: "Civil",
    father_name: "Mr. Patel",
    phone: "9876123450",
  },
  {
    id: 12,
    name: "Priya",
    company: "ElectroTech",
    package: "60 LPA",
    branch: "Electronics",
    father_name: "Mr. Sharma",
    phone: "9123456780",
  },
  {
    id: 13,
    name: "Sneha",
    company: "BioGen",
    package: "85 LPA",
    branch: "Biotechnology",
    father_name: "Mr. Desai",
    phone: "9333666699",
  },
  {
    id: 14,
    name: "Anil",
    company: "AgriTech",
    package: "60 LPA",
    branch: "Agriculture",
    father_name: "Mr. Kumar",
    phone: "9123789450",
  },
  {
    id: 15,
    name: "Kavita",
    company: "EnergySolutions",
    package: "85 LPA",
    branch: "Energy",
    father_name: "Mr. Verma",
    phone: "9333222233",
  },
  {
    id: 16,
    name: "Vikram",
    company: "MechTech",
    package: "60 LPA",
    branch: "Mechanical",
    father_name: "Mr. Reddy",
    phone: "9776543210",
  },
  {
    id: 17,
    name: "Suman",
    company: "FashionFusion",
    package: "85 LPA",
    branch: "Fashion",
    father_name: "Mr. Jain",
    phone: "9888888888",
  },
  {
    id: 18,
    name: "Arjun",
    company: "FoodFiesta",
    package: "85 LPA",
    branch: "Food",
    father_name: "Mr. Singhania",
    phone: "9444444444",
  },
  {
    id: 19,
    name: "Pooja",
    company: "MediaMasters",
    package: "60 LPA",
    branch: "Media",
    father_name: "Mr. Khanna",
    phone: "9555555555",
  },
];

const PlacementPage = () => {
  const [placements, setPlacements] = useState(placementsData);
  const [sortBy, setSortBy] = useState(null);
  const router = useRouter();
  const [pack, setPack] = useState("package");
  const [animateStars, setAnimateStars] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [popupInfo, setPopupInfo] = useState(null);

  const sortPlacements = (key) => {
    const sortedPlacements = [...placements].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    const Package = sortedPlacements;
    setPlacements(Package);
    setSortBy(key);
    const samPackage = sortedPlacements.every(
      (student) => student[key] === sortedPlacements[0][key]
    );

    if (samPackage) {
      setSortBy(highestPackage);
    }
  };

  const sortPackages = (key) => {
    const sortedPackage = [...placements].sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });

    const highestPackage = sortedPackage.slice(0, 5);
    setPlacements(highestPackage);
    setSortBy(key);
    const samePackage = sortedPackage.every(
      (student) => student[key] === sortedPackage[0][key]
    );

    if (samePackage) {
      setSortBy(!highestPackage);
    }
  };

  const resetSort = () => {
    setPlacements(placementsData);
    setSortBy(null);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchStudents = async () => {
    const response = await fetch(`/api/students?query=${searchQuery}`);
    const data = await response.json();
    setSearchResults(data);
  };

  const filteredStudents = placementsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.package
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const onBack = () => {
    router.push("/Target");
  };

  const toggle = () => {
    setSortBy(!sortBy);
  };

  const handleRowHover = (student) => {
    setPopupInfo(student);
  };

  const handleRowLeave = () => {
    setPopupInfo(null);
  };

  return (
    <>
      {sortBy === "package" ? (
        <div className="mt-40 p-5 bg-slate-200 rounded-xl m-5 border border-black shadow-xl overflow-hidden bg-[url('/images/student_P.svg')] bg-cover bg-no-repeat bg-origin-content select-none">
          <div className=" text-right">
            <button onClick={toggle}>
              <img src="/images/delete.png" alt="Cross" className="w-11 h-10" />
            </button>
          </div>
          <div className="p-2 m-5">
            <h1 className=" font-bold text-3xl text-center mb-2">
              Government Polytechnic Dehradun
            </h1>
            <h1 className=" font-bold text-2xl text-red-600 text-center mb-2">
              Top five highest package-placed students
            </h1>
            <div className="grid grid-cols-2 gap-10 p-5 m-5 bg-transparent rounded-xl ml-20">
              {placements.map((placement) => (
                <div
                  key={placement.id}
                  className="text-white w-96 p-4 m-5 rounded-xl bg-slate-950 hover:scale-110 "
                >
                  <div className="">
                    <h2 className="text-xl font-bold mb-2">{placement.name}</h2>
                    <hr className="h1 border border-white mb-2" />
                    <p className="text-gray-300">
                      <a className="text-amber-200 font-semibold">Company:-</a>{" "}
                      {placement.company}
                    </p>
                    <p className="text-gray-300">
                      <a className="text-amber-200 font-semibold">Package:-</a>{" "}
                      {placement.package}
                    </p>
                    <p className="text-gray-300">
                      {" "}
                      <a className="text-amber-200 font-semibold">
                        Branch:-
                      </a>{" "}
                      {placement.branch}
                    </p>
                    <p className="text-gray-300">
                      <a className="text-amber-200 font-semibold">
                        Father Name:-
                      </a>{" "}
                      {placement.father_name}
                    </p>
                    <p className="text-gray-300">
                      {" "}
                      <a className="text-amber-200 font-semibold">
                        Phone No:-
                      </a>{" "}
                      {placement.phone}
                    </p>
                  </div>

                  {/* <div className="">
                  <ImageUploader
                    handleImageChange={handleImageChange}
                    previewImage={previewImage}
                  />
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        //
        <div className="">
          <div className="container mx-auto px-4 py-8 m-10 mt-28 border rounded-xl bg-cyan-100 shadow-xl">
            <button
              onClick={onBack}
              className="bg-orange-400 p-2 font-semibold rounded-2xl  focus:ring-2"
            >
              Back
            </button>
            <h1 className="text-3xl font-bold mb-5 text-center">
              Student Placement Details
            </h1>
            <div className="flex justify-between">
              {/* Search studrnts from table */}
              <div className="flex justify-center my-4">
                <input
                  type="text"
                  placeholder="Search hired students"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-64 h-10 mt-1 border shadow-md rounded-full p-2 text-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className=" flex">
                <button
                  onClick={() => sortPackages("package")}
                  style={{ backgroundColor: "#FFF7FC" }}
                  className={` ml-60 px-2 py-1 flex shadow-md border m-5 rounded-xl focus:outline-none focus:ring-2 ${
                    sortBy === "package" ? "bg-orange-500" : ""
                  }`}
                >
                  <p className="mt-1">Five highest package</p>
                  <img
                    src="/images/back.png"
                    alt="Go forward"
                    className="w-10 px-2 py-1 "
                  />
                </button>
              </div>
            </div>

            <div
              class="bg-blue-100 border-t-2 border-orange-500 mb-3 rounded-b text-slate-950 px-4 py-3 shadow-md"
              role="alert"
            >
              <p class="">
                {" "}
                <a className="text-green-500 text-xl">Note:-</a>{" "}
                <marquee className="marq" direction="left" loop="">
                  If you'd like to learn more about student details, please
                  click on any data field within the table rows.
                </marquee>
              </p>
            </div>

            <div className="mb-4 flex items-center focus:ring-indigo-500 text-center">
              {/* <button
                onClick={() => sortPlacements("name")}
                className={`mr-2 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring-2 ${
                  sortBy === "name" ? "bg-orange-500" : ""
                }`}
              >
                Sort by Name
              </button>
              <button
                onClick={() => sortPlacements("company")}
                className={`mr-2 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring-2 ${
                  sortBy === "company" ? "bg-orange-500" : ""
                }`}
              >
                Sort by Company
              </button> 

               <button
                onClick={resetSort}
                className="px-2 py-1 border border-black rounded-md focus:outline-none focus:ring-2"
              >
                Reset Sorting
              </button> */}

              {/* Search studrnts from table */}
              {/* <div className="flex justify-center my-4">
                <input
                  type="text"
                  placeholder="Search hired students"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-44 h-8 border border-black rounded-md text-black py-2 px-1 ml-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={() => sortPackages("package")}
                className={` ml-80 px-2 py-1 flex border rounded-xl focus:outline-none focus:ring-2 ${
                  sortBy === "package" ? "bg-orange-500" : ""
                }`}
              >
                <p className="mt-1">Five highest package</p>
                <img
                  src="/images/back.png"
                  alt="Go forward"
                  className="w-10 px-2 py-1 "
                />
              </button> */}
            </div>
            <div className="overflow-y-auto max-h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer select-none">
              <table
                className={`min-w-full p-2 text-center cursor-pointer bg-orange-100 shadow-xl`}
              >
                <thead className=" table-fixed">
                  <tr className="bg-gray-200">
                    <th scope="col" className="px-6 py-3 border ">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3 border ">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 border ">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 border ">
                      Package
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className=" bg-white"
                      onClick={() => handleRowHover(student)}
                      // onMouseMove={() => handleRowHover(student)}
                      // onMouseLeave={handleRowLeave}
                    >
                      <td className="px-6 py-3 border">
                        <span className="text-sm text-gray-600">
                          {/* {placement.id} */}
                          {student.id}
                        </span>
                      </td>
                      <td className="px-6 py-3 border ">
                        <span className="text-sm text-gray-600">
                          {/* {placement.name} */}
                          {student.name}
                        </span>
                      </td>
                      <td className="px-6 py-3 border ">
                        <span className="text-sm text-gray-600">
                          {/* {placement.company} */}
                          {student.company}
                        </span>
                      </td>
                      <td className="px-6 py-3 border ">
                        <span className="text-sm text-gray-600">
                          {/* {placement.package} */}
                          {student.package}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {popupInfo && (
                <div className="popup fixed  top-0 left-0 w-full h-full bg-red-200 flex justify-center items-center">
                  <div className="popup-content bg-transparent p-8 rounded-md text-center">
                    <div className=" text-right">
                      <button onClick={() => setPopupInfo(!popupInfo)}>
                        <img
                          src="/images/delete.png"
                          alt="Cross"
                          className="w-11 h-10"
                        />
                      </button>
                    </div>
                    <div className="bg-gray-600 text-white p-8 rounded-md text-center">
                      <h2 className=" font-bold text-3xl text-black">
                        {" "}
                        <a>{popupInfo.name}</a>
                      </h2>
                      <p>
                        {" "}
                        <a className="font-semibold text-xl text-amber-200">
                          Company:-
                        </a>
                        {popupInfo.company}
                      </p>
                      <p>
                        {" "}
                        <a className="font-semibold text-xl text-amber-200">
                          Package:-
                        </a>{" "}
                        {popupInfo.package}
                      </p>
                      <p>
                        {" "}
                        <a className="font-semibold text-xl text-amber-200">
                          Branch:-
                        </a>{" "}
                        {popupInfo.branch}{" "}
                      </p>
                      <p>
                        {" "}
                        <a className="font-semibold text-xl text-amber-200">
                          Father name:-
                        </a>{" "}
                        {popupInfo.father_name}{" "}
                      </p>
                      <p>
                        {" "}
                        <a className="font-semibold text-xl text-amber-200">
                          Phone no:-
                        </a>{" "}
                        {popupInfo.phone}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Company />
        </div>
      )}
      {/* <Containt /> */}
    </>
  );
};

export default PlacementPage;
