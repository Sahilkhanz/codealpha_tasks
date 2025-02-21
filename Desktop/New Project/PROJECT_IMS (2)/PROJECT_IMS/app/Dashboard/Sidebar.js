"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { REM } from "next/font/google";
import About from "./About";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapse, setIsCollapse] = useState(false);
  const [isClick, setIsClick] = useState(false);

  //router
  // const router = useRouter;
  // console.log(router);

  const wrapperClass = classNames(
    " h-screen bg-white z-20 cursor-pointer px-4 pt-8 flex justify-between flex-col border-2 border-black-500 shadow-2xl rounded-2xl overflow-hidden",
    {
      "w-20": !toggleCollapse,
      "w-80": toggleCollapse,
    }
  );

  const backwardIconClass = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const onMouseOver = () => {
    setIsCollapse(!isCollapse);
  };

  const handleToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const bgChange = (element) => {
    setIsClick(element);
  };

  // change mode
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  function changeMode() {
    setStyle((prevStyle) => ({
      color: prevStyle.color === "black" ? "white" : "black",
      backgroundColor:
        prevStyle.backgroundColor === "black" ? "white" : "black",
    }));
  }
  return (
    <>
      <div className="w-full bg-neutral-400 p-2 bg-opacity-100 overflow-hidden">
        <div className=" flex gap-2 p-0">
          <div
            className={wrapperClass}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{}}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between relative">
                <Image
                  src={"/images/logo.png"}
                  alt={"Logo"}
                  className="object-fit object-center flex"
                  width={80}
                  height={10}
                />
                <span
                  className={classNames("mt-2 text-lg font-medium text-white", {
                    hidden: toggleCollapse,
                  })}
                ></span>
                {isCollapse && (
                  <button className={backwardIconClass} onClick={handleToggle}>
                    <Image
                      src={"/images/backward.png"}
                      alt="backward"
                      width={50}
                      height={50}
                    />
                  </button>
                )}
              </div>
              <button
                onClick={changeMode}
                type="button"
                className=" rounded-lg border border-black overflow-hidden"
                style={{ display: !toggleCollapse ? "none" : "block" }}
              >
                Change mode
              </button>
              <div>
                <ul
                  className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100
                  rounded-lg bg-gray-50  md:mt-5 md:border-0 md:bg-white"
                  style={style}
                >
                  <li
                    className=" rounded-lg p-2 mt-10"
                    onClick={() => bgChange("element1")}
                    style={{
                      backgroundColor:
                        isClick === "element1" ? "orange" : "transparent",
                      display: !toggleCollapse ? "none" : "block",
                    }}
                  >
                    <Link href="/" className="flex gap-1">
                      {/* <Image
                        src={"/images/dashboard.png"}
                        alt="dashboard"
                        width={20}
                        height={10}
                      />{" "} */}
                      Dashboard
                    </Link>
                  </li>

                  <li
                    className=" hover: rounded-lg p-2 mt-10"
                    onClick={() => bgChange("element2")}
                    style={{
                      backgroundColor:
                        isClick === "element2" ? "orange" : "transparent",
                      display: !toggleCollapse ? "none" : "block",
                    }}
                  >
                    <Link href="/Login">Student</Link>
                  </li>
                  <li
                    className=" rounded-lg p-2 mt-10"
                    onClick={() => bgChange("element3")}
                    style={{
                      backgroundColor:
                        isClick === "element3" ? "orange" : "transparent",
                      display: !toggleCollapse ? "none" : "block",
                    }}
                  >
                    <Link href="/">Circulars</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <About />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
