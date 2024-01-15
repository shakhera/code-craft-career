import React from "react";
import NextNab from "../sharePage/NextNab/NextNab";
import { useLoaderData } from "react-router-dom";

const ApliedJobs = () => {
  const jobList = useLoaderData();
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = jobList;
  return (
    <div>
      <div className="list-disc pl-4">
        {jobList.map((item) => (
          <h2 key={item.id} className="mb-2">
            {item.job_title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default ApliedJobs;
