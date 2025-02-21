"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Dashboard/Loading";
import { useRouter } from "next/navigation";

const Id = ({}) => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    rollNo: "",
    department: "",
    mather_name: "",
    father_name: "",
    residential: "",
    permanent: "",
  });

  useEffect(() => {
    setUserData({
      name: "John Doe",
      rollNo: "12345",
      department: "Information Technology",
      mather_name: "Marry",
      father_name: "Tom Doe",
      residential: "Street No-34, London, UK",
      permanent: "Street No-34, London, UK",
    });
  });

  const back = () => {
    router.push("/Student");
  };

  return (
    <div className="p-2 md:p-4 rounded-xl border border-black mt-28 w-auto bg-gray-200 m-4 flex-1 select-none">
      <div className="flex items-center">
        <button
          onClick={back}
          className=" w-14 h-8 bg-gradient-to-r from-red-400 via-orange-600 to-pink-500 hover:opacity-70 duration-200 rounded-xl border-2 border-black"
        >
          Back
        </button>
        <span className=" text-2xl font-serif p-2 text-red-600">{userData.name}</span>
        <h4 className="text-2xl font-bold text-orange-600"></h4>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:p-4">
        <Image
          className="rounded-full border-8 border-black object-cover object-center w-[150px] h-[150px] hover:scale-125"
          width={150}
          height={150}
          src={"/images/student3.png"}
        />
        <div className="flex flex-1 flex-wrap gap-2 md:p-4">
          <ValuePairContainer label={"Name"} value={userData.name} />
          <ValuePairContainer label={"Roll Number"} value={userData.rollNo} />
          <ValuePairContainer
            label={"Department"}
            value={userData.department}
          />
          <ValuePairContainer label={"Mother Name"} value={userData.mather_name} />
          <ValuePairContainer
            label={"Father Name"}
            value={userData.father_name}
          />
          <ValuePairContainer label={"Residential Address"} value={userData.residential} />
          <ValuePairContainer
            label={"Permanent Address"}
            value={userData.permanent}
          />
        </div>
      </div>
    </div>
  );
};
const ValuePairContainer = ({ label, value }) => {
  return (
    <div className=" bg-gradient-to-r from-cyan-400 to-blue-400 colog p-2 px-5 border-black rounded cursor-pointer hover:opacity-70 duration-300">
      {/* <div className=''>{label} :- </div> */}
      <span className="font-semibold whitespace-nowrap">{label} :- </span>
      <span className="text-gray-900 pl-2 text-m">{value}</span>
    </div>
  );
};

export default Id;
