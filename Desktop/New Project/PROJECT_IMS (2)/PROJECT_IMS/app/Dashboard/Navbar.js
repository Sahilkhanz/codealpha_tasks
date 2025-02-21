"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  if (pathname === "/verify") return null;
  const activeTabClass =
    "block py-2 px-5 rounded bg-orange-600 text-white text-xs text-center hover:bg-orange-700 duration-300";
  const NormalClass =
    "block py-2 px-5 rounded text-gray-800 text-xs text-center hover:bg-gray-300 duration-300";

  return (
    <>
      <nav className="top-0 left-0 fixed w-[100%] z-[100] bg-white border border-b-gray-300 border-gray-200 m-1 rounded-xl p-0 shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center">
            <Image
              src={"/images/logo.jfif"}
              className="borderrounded"
              width={40}
              height={30}
              alt={"GPD Logo"}
            />
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                // src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                src={"/images/gerard.png"}
                alt="user photo"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              {/* <div className="px-4 py-3">
              <span className="block text-sm text-gray-900">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate">
                name@flowbite.com
              </span>
            </div> */}
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    href={"/profile"}
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? activeTabClass : NormalClass}
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/Login"
                  className={
                    pathname === "/Login" ? activeTabClass : NormalClass
                  }
                  aria-current="page"
                >
                  Student
                </Link>
              </li>
              {/* <li>
                            <Link
                                href="/Student Target"
                                className={pathname.startsWith("/Student Target") ? activeTabClass : NormalClass}
                                aria-current="page"
                            >
                                Student Target
                            </Link>
                        </li> */}
              {/* <li>
                            <Link
                                href="/Student Edit"
                                className={pathname.startsWith("/Student Target") ? activeTabClass : NormalClass}
                                aria-current="page"
                            >
                                Student Edit
                            </Link>
                        </li> */}
              <li>
                <Link
                  href="/"
                  className={
                    pathname.startsWith("/Student_Placement")
                      ? activeTabClass
                      : NormalClass
                  }
                  aria-current="page"
                >
                  Circulars
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
