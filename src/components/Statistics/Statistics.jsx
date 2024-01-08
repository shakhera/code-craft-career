import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoriesData from "../CategoriesData/CategoriesData";

const Statistics = () => {
  const categoriesData = useLoaderData();
  console.log(categoriesData);

  return (
    <div className="mt-12">
      <div className="text-center font-manrope">
        <h2 className=" text-4xl font-bold mb-3">Job Category List</h2>
        <p className="  text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-14">
        {categoriesData.map((categories) => (
          <CategoriesData
            key={categories.id}
            categories={categories}
          ></CategoriesData>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
