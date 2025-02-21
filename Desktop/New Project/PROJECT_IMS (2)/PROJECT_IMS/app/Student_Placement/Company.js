import React, { useState } from "react";
import Containt from "./Containt";

const Company = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [companies, setCompanies] = useState([
    {
      name: "Google",
      industry: "Tech",
      location: "New York",
      url: "https://about.google/intl/ALL_in/",
    },
    {
      name: "Wipro",
      industry: "Tech",
      location: "India",
      url: "https://www.wipro.com/",
    },
    {
      name: "Apple",
      industry: "Tech",
      location: "Cupertino, California",
      url: "https://www.apple.com/in/",
    },
    {
      name: "Adobe",
      industry: "Tech",
      location: "San Jose, California",
      url: "https://www.adobe.com/in/",
    },
    {
      name: "Tesla",
      industry: "Automotive/Energy",
      location: "Palo Alto, California, USA",
      url: "https://www.tesla.com/",
    },
    {
      name: "Amazon",
      industry: "E-commerce/Technology",
      location: "Seattle, Washington, USA",
      url: "https://www.amazon.com/",
    },
    {
      name: "SpaceX",
      industry: "Aerospace/Space Exploration",
      location: "Hawthorne, California, USA",
      url: "https://www.spacex.com/",
    },
    {
      name: "Netflix",
      industry: "Entertainment/Streaming",
      location: "Los Gatos, California, USA",
      url: "https://www.netflix.com/",
    },
    {
      name: "Samsung",
      industry: "Electronics/Technology",
      location: "Seoul, South Korea",
      url: "https://www.samsung.com/",
    },
    {
      name: "Uber",
      industry: "Transportation/Technology",
      location: "San Francisco, California, USA",
      url: "https://www.uber.com/",
    },
    {
      name: "Alibaba",
      industry: "E-commerce/Technology",
      location: "Hangzhou, Zhejiang, China",
      url: "https://www.alibaba.com/",
    },
    {
      name: "Tata Motors",
      industry: "Automotive",
      location: "Mumbai, Maharashtra, India",
      url: "https://www.tatamotors.com/",
    },
    {
      name: "Reliance Industries",
      industry: "Conglomerate",
      location: "Mumbai, Maharashtra, India",
      url: "https://www.ril.com/",
    },
    {
      name: "Infosys",
      industry: "Information Technology",
      location: "Bangalore, Karnataka, India",
      url: "https://www.infosys.com/",
    },
  ]);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortCompanies = (key) => {
    const sortedCompanies = [...companies].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setSortBy(key);
    setCompanies(sortedCompanies);
  };

  return (
    <>
      <div
        className="container mx-auto px-4 py-8 m-10 mt-10 border rounded-xl shadow-xl p-5"
        style={{ backgroundColor: "#FEFBF6" }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Hiring Companies
        </h2>
        <div className="flex text-center gap-10 justify-center">
          <input
            type="text"
            placeholder="Search companies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-44 p-2 border rounded-2xl shadow-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={sortBy}
            onChange={(e) => sortCompanies(e.target.value)}
            className="w-40 border rounded-2xl shadow-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="industry">Industry</option>
            <option value="location">Location</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-3 text-black">
          {filteredCompanies.map((company, index) => (
            <div
              key={index}
              className="border py-4 px-6 overflow-hidden rounded-lg gap-3 grid"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <div className="" style={{ color: "824D74" }}>
                <p className="">
                  <a className="font-semibold" style={{ color: "#344955" }}>
                    Industry:-
                  </a>{" "}
                  {company.industry}
                </p>
                <p>
                  <a className="font-semibold " style={{ color: "#344955" }}>
                    Location:-
                  </a>{" "}
                  {company.location}
                </p>
              </div>
              <p className="flex gap-2 h-10">
                {" "}
                <a
                  href={company.url}
                  className="inline-flex items-center gap-x-1.5 text-slate-950 decoration-2 hover:underline font-medium"
                >
                  About Company
                </a>{" "}
                <img
                  src="/images/back.png"
                  alt="right-arrow"
                  className=" w-10 border rounded-xl"
                  style={{ backgroundColor: "#C4E4FF" }}
                  onClick={() => {
                    window.location.href = company.url;
                  }}
                />{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Containt />
    </>
  );
};

export default Company;
