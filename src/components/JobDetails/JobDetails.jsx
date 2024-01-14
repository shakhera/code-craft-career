import React from "react";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
// import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faLocationDot,
  faPhone,
  faMailBulk,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import NextNab from "../sharePage/NextNab/NextNab";

const JobDetails = () => {
  return (
    <div>
      <div className="hidden md:flex md:justify-between">
        <img src={bg1} alt="" />
        <img src={bg2} alt="" />
      </div>
      <hr className=" border-t shadow-lg border-gray-300" />
      <h2 className="text-4xl font-extrabold mt-4">Job Details </h2>
      <div className="grid grid-cols-1 px-6 md:grid-cols-2 gap-4 mt-14">
        <div className="text-left ">
          <p>
            <span className="font-bold">Job Description:</span> A UI/UX (User
            Interface/User Experience) designer is responsible for designing and
            creating engaging and effective interfaces for software and web
            applications. This includes designing the layout, visual design, and
            interactivity of the user interface.
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span> Collaborating
            with cross-functional teams: UI/UX designers often work closely with
            other teams, including product management, engineering, and
            marketing, to ensure that the user interface is aligned with
            business and technical requirements. You will need to be able to
            effectively communicate your design ideas and gather feedback from
            other team members.
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>
            Bachelor degree to complete any reputational university.
          </p>
          <p>
            <span className="font-bold">Experiences:</span> 2-3 Years in this
            field.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:ml-24  ">
          <div className="text-left  border rounded bg-gray-100 px-8 py-8 h-auto w-80 ">
            <h2 className="font-Manrope text-20 font-extrabold ">
              Job Details
            </h2>
            <hr className="my-4 border-t border-gray-500" />
            <div className="font-Manrope text-20 font-medium ">
              <p className="mt-1">
                <FontAwesomeIcon icon={faDollar} />
                <span className="font-bold text-20 pl-3">Salary :</span>
                100K - 150K (Per Month)
              </p>
              <p className="mb-6 mt-1">
                <FontAwesomeIcon icon={faIdCard} />
                <span className="font-bold text-20 pl-3">Job Title :</span>
                Product Designer
              </p>
              <h2 className="text-20 font-extrabold ">Contact Information</h2>

              <hr className="my-4 border-t border-gray-500" />

              <p className="mt-1">
                <FontAwesomeIcon icon={faPhone} />
                <span className="font-bold text-20 pl-3"> Phone :</span>
                01750-00 00 00
              </p>
              <p className="mb-1 mt-1">
                <FontAwesomeIcon icon={faMailBulk} />
                <span className="font-bold text-20 pl-3"> Email :</span>
                info@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="font-bold text-20 pl-3"> Address :</span>
                Dhanmondi 32, Sukrabad Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <button className=" w-80 h-12 mt-6 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-600 hover:to-gray-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-gray-500">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
