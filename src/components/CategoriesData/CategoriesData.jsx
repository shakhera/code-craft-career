import React from "react";

const CategoriesData = ({ categories }) => {
  const { id, logo, category_name, availability } = categories;
  return (
    <div className="rounded-2xl bg-gradient-to-r from-gray-100 to-gray-300">
      <div className=" py-12">
        <div className="flex items-center justify-center ">
          <img className="w-20 bg-slate-300 rounded-lg p-3" src={logo} alt="" />
        </div>

        <div className="text-opacity-70 font-manrope font-normal text-base">
          <h2 className="text-2xl font-semibold">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesData;
