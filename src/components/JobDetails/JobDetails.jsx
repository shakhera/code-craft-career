import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();
  console.log(details);

  const { salary, job_title, contact_information } = details;

  return (
    <div>
      <h2>Job Details </h2>
      <hr />
      <h5>
        Salary:
        <FontAwesomeIcon icon={faDollar} />
        <span>{salary}</span>
      </h5>
      <h5>
        Job Title:
        <FontAwesomeIcon icon={faDollar} />
        <span>{job_title}</span>
      </h5>
      <h2>Contact Information</h2>
      {/* <h5>
        Phone:
        <FontAwesomeIcon icon={faDollar} />
        <span>{contact_information.phone}</span>
      </h5> */}
      {/* <h5>
        Email:
        <FontAwesomeIcon icon={faDollar} />
        <span>{contact_information.email}</span>
      </h5>
      <h5>
        Address:
        <FontAwesomeIcon icon={faDollar} />
        <span>{contact_information.address}</span>
      </h5> */}
    </div>
  );
};

export default JobDetails;
