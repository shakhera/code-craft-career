import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoriesData from "../CategoriesData/CategoriesData";
import Job from "../Job/Job";

const Statistics = () => {
  const categoriesData = useLoaderData();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <div className="mt-12">
        <div className="text-center font-manrope">
          <h2 className=" text-4xl font-bold mb-3">Job Category List</h2>
          <p className="  text-base font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {categoriesData.map((categories) => (
            <CategoriesData
              key={categories.id}
              categories={categories}
            ></CategoriesData>
          ))}
        </div>
      </div>

      {/* feature job  */}
      <div className="mt-12">
        <div className="text-center font-manrope">
          <h2 className=" text-4xl font-bold mb-3">Featured Jobs</h2>
          <p className="  text-base font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistics;
