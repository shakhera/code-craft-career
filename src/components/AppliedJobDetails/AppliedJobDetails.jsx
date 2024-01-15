import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AppliedJobDetails = ({ item }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = item;
  return (
    <div className="border pl-6 sm:m-8 sm:mx-8 my-6 pb-8 w-auto md:flex gap-12 md:mx-64">
      <img className="w-24 h-16 flex my-auto " src={logo} alt="" />
      <div className="">
        <div>
          <div className="text-start ">
            <h2 className="text-2xl font-semibold py-3">{job_title}</h2>
            <h1>{company_name}</h1>
          </div>
          <div className="flex gap-4 pt-3 pb-3">
            <button className="px-4 py-2 border-2 rounded-md">
              {remote_or_onsite}
            </button>
            <button className="px-4 py-2 border-2 rounded-md">
              {job_type}
            </button>
          </div>
          <div className="flex items-center  gap-4">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{location}</p>
            <p>
              <FontAwesomeIcon icon={faDollar} />
              {salary}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 ">
        <button className=" px-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
