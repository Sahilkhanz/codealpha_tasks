"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const goPush = () => {
    router.push("/Login");
  };

  const goPlace = () => {
    router.push("/Student_Placement");
  };

  return (
    <>
      {/* <div className=" w-full h-full bg-neutral-400 p-2 bg-opacity-100 overflow-hidden"> */}
      <div className=" bg-white w-full rounded-2xl p-2 overflow-hidden">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-2xl md:text-4xl lg:text-5xl dark:text-black-200">
            Government Polytechnic{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-pink-600 to-orange-600 text-transparent">
              Dehardun
            </span>
          </h1>
        </div>

        <div className=" mt-10 max-w-4xl text-slate-900 mx-auto text-center  font-thin">
          "Welcome to Government Polytechnic Dehradun IMS! Where innovation
          meets education, and dreams take flight. Join us in shaping a brighter
          future through knowledge and skill. Explore, learn, succeed!"
        </div>
        {/* <div className="">
          <img src="/images/college-students.png" alt="college students" />
        </div> */}

        <div className="container grid grid-cols-3 gap-10 w-full h-52 mt-32 rounded-md px-14 py-4 p-2 bg-transparent">
          <div
            className="w-60 h-44 rounded-xl p-2 bg-white cursor-pointer hover:opacity-80"
            style={{ backgroundColor: "#EEEEEE" }}
            onClick={goPush}
          >
            <img
              src="/images/education.png"
              alt="student-img"
              className="w-10 border border-black bg-orange-700 rounded-md p-1 m-3"
            />
            <h2 class="text-xl ml-2 font-semibold">Students</h2>
            <p class="mt-1 ml-2 text-base">
              Students can add, edit, and upload their personal details.
            </p>
          </div>
          <div
            className="w-60 h-44 rounded-xl p-2 cursor-pointer hover:opacity-80"
            style={{ backgroundColor: "#EEEEEE" }}
            onClick={goPlace}
          >
            <img
              src="/images/recruitment.png"
              alt="recruitment-img"
              className="w-10 border border-black bg-orange-700 rounded-md p-1 m-3"
            />
            <h2 class="text-xl ml-2 font-semibold">Placements</h2>
            <p class="mt-1 ml-2 text-base">
              Students can view details about their placements and the
              associated companies.
            </p>
          </div>
          <div
            className=" w-60 h-44 rounded-xl p-2 bg-blue-600 cursor-pointer hover:opacity-80"
            style={{ backgroundColor: "#EEEEEE" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
