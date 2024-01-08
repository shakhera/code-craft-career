import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div className="rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 p-12 ">
      <img className="w-24 h-16" src={logo} alt="" />
      <div className="text-start ">
        <h2 className="text-2xl font-semibold py-3">{job_title}</h2>
        <h1>{company_name}</h1>
      </div>
      <div className="flex gap-4 pt-3 pb-3">
        <button className="px-4 py-2 border-2 rounded-md">
          {remote_or_onsite}
        </button>
        <button className="px-4 py-2 border-2 rounded-md">{job_type}</button>
      </div>
      <div className="flex gap-4">
        <p>
           <FontAwesomeIcon icon={faLocationDot}  />
          {location}
        </p>
        <p>
          <FontAwesomeIcon icon={faDollar} />
          {salary}
        </p>
      </div>
      <div className="flex justify-start pt-3">
        <button className=" px-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;
