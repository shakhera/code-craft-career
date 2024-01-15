import React from "react";
import NextNab from "../sharePage/NextNab/NextNab";
import { useLoaderData } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";

const ApliedJobs = () => {
  const jobList = useLoaderData();

  return (
    <div>
      <div className="">
        {jobList.map((item) => (
          <AppliedJobDetails key={item.id} item={item}></AppliedJobDetails>
        ))}
      </div>
    </div>
  );
};

export default ApliedJobs;
