"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState([]);

  const b = ["2012-15", "2015-18", "2018-21", "2021-24"];

  const _validateUser = async () => {
    setUserData([
      {
        id: 1,
        name: "John",
        rollNo: "12768",
        father_name: "TOM",
        phone: "877877777",
        batch: "2020",
        department: "CS",
        result: "Pass-90%",
      },
      {
        id: 2,
        name: "Gaurve",
        rollNo: "210098",
        father_name: "Shiv Kumar",
        phone: "7677667709",
        batch: "2017",
        department: "Civil",
        result: "Pass-55%",
      },
      {
        id: 3,
        name: "Sem",
        rollNo: "36512",
        father_name: "R Hedop",
        phone: "675656566",
        batch: "2018",
        department: "Pharmacy",
        result: "Fail-30%",
      },
      {
        id: 4,
        name: "Ritika",
        rollNo: "453217",
        father_name: "Mohan",
        phone: "989898973",
        batch: "2022",
        department: "ECS",
        result: "Pass-88%",
      },
      {
        id: 5,
        name: "Nepolian",
        rollNo: "567908",
        father_name: "Richerd",
        phone: "0980876756",
        batch: "2015",
        department: "IT",
        result: "Pass-60%",
      },
      {
        id: 6,
        name: "Marry",
        rollNo: "60098",
        father_name: "Michele",
        phone: "124365789",
        batch: "2021",
        department: "IT",
        result: "Pass-75%",
      },
    ]);
  };

  useEffect(() => {
    _validateUser();
  }, []);

  return (
    <div className="py-[57px] min-h-screen bg-gray-100 mx-auto bg-[url('/images/boys.png')] bg-cover bg-no-repeat bg-origin-content p-4 border-4 bg-scroll select-none">
      <div className="p-2 md:p-4">
        <>
          {/* Table Section */}
          <div className="max-w-[100rem] px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            {/* Card */}
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                    {/* Header */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <h2 className="text-xl font-semibold text-orange-600 dark:text-gray-200">
                          Students
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Welcome to GPD{" "}
                          <a className="inline-flex items-center gap-x-1.5 text-orange-600 decoration-2 hover:underline font-medium">
                            Student Section
                          </a>
                        </p>
                      </div>
                      <div className="min-w-[300px] flex items-center gap-2">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                          {b.map((batch, index) => (
                            <option key={index} value={batch}>
                              Choose a batch {batch}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Table */}
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                ID
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Roll No.
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Name
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Father Name
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Phone Number
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Batch
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Department
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Result
                              </span>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                Actions
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {userData.map((user, index) => (
                          <tr key={index}>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.id}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.rollNo}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.name}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.father_name}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.phone}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.batch}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.department}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {user.result}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 border rounded-xl p-2 bg-orange-600">
                                  <Link href="/Target">Target</Link>
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Page;
