import React from "react";
import social from "../../assets/icons/social.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-12  fixed bottom-0 left-0 w-ful ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-3">
        <div className="text-left mb-4">
          <h4 className="text-white font-manrope font-semibold text-lg pb-2">
            CodeCraftCareer
          </h4>
          <p className="text-white text-opacity-70 font-manrope text-base font-normal leading-6">
            CodeCraftCareer is where passion meets proficiency, where every line
            of code weaves the fabric of your professional journey.
          </p>
          <img className="mt-3" src={social} alt="" />
        </div>
        <div className=" text-left pl-12">
          <h4 className="text-white font-manrope font-semibold text-lg">
            Company
          </h4>
          <ul className="text-white text-left text-opacity-70 font-manrope font-normal text-base leading-10">
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className=" text-left pl-12">
          <h4 className="text-white font-manrope font-semibold text-lg">
            Product
          </h4>
          <ul className="text-white text-left text-opacity-70 font-manrope font-normal text-base leading-10">
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className=" text-left pl-12">
          <h4 className="text-white font-manrope font-semibold text-lg">
            Support
          </h4>
          <ul className="text-white text-left text-opacity-70 font-manrope font-normal text-base leading-10">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className=" text-left pl-12">
          <h4 className="text-white font-manrope font-semibold text-lg">
            Contact
          </h4>
          <ul className="text-white text-left text-opacity-70 font-manrope font-normal text-base leading-10">
            <li>Santosh, Tangail-1902</li>
            <li>+8801521-51</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-indigo-300 to-purple-400" />

      <div className="text-white text-sm md:flex justify-between mt-4 mx-12">
        <p className=" font-inter font-normal leading-7">
          @2023 <span className="font-semibold leading-7">CodeCraftCareer</span> . All Rights Reserved{" "}
        </p>
        <p className=" font-inter font-normal leading-7">
          Powered by <span className=" font-semibold leading-7">CodeCraftCareer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
