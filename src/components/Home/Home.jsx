import React, { useEffect, useState } from "react";
import user from "../../assets/images/user.png";
import { useLoaderData } from "react-router-dom";
import CategoriesData from "../CategoriesData/CategoriesData";
import Job from "../Job/Job";
import JobDetails from "../JobDetails/JobDetails";
import Header from "../Header/Header";
const Home = () => {
  const categoriesData = useLoaderData();
  const [details, setDetails] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // const handleToDetails = (info) => {
  //   const newDetails = [...details, info];
  //   setDetails(newDetails);
  // };

  return (
    <div>
      {/* <Header></Header> */}
      <div className="mt-5">
        <section className=" md:flex justify-between">
          <div className="flex justify-center items-center">
            <div className="mt-12 w-96 text-left">
              <h2 className=" font-manrope text-6xl font-extrabold m-4">
                One Step Closer To Your <br></br>
                <span className="text-purple-700"> Dream Job</span>
              </h2>
              <p className="font-manrope text-base font-medium mb-4">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="px-4 ml-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <img src={user} alt="" />
          </div>
        </section>

        {/* Job Category List */}
        <section>
          <div className="mt-12">
            <div className="text-center font-manrope">
              <h2 className=" text-4xl font-bold mb-3">Job Category List</h2>
              <p className="  text-base font-medium">
                Explore thousands of job opportunities with all the information
                you need. Its your future
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
        </section>

        {/* job feature */}
        <section>
          <div className="mt-12">
            <div className="text-center font-manrope">
              <h2 className=" text-4xl font-bold mb-3">Featured Jobs</h2>
              <p className="  text-base font-medium">
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
              {jobs.map((job) => (
                <Job key={job.id} job={job}></Job>
              ))}
            </div>
          </div>
          <button className="px-4 ml-4 py-4 mt-12 mb-8 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
            See ALl Jobs
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
