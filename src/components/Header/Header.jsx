import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="bg-gray-100 p-5  shadow md:flex md:items-center md:justify-between">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <a className="text-1xl md:text-3xl font-bold font-mono" href="#">
              CodeCraftCareer
            </a>
            <button
              className="block lg:hidden focus:outline-none "
              onClick={toggleMenu}
            >
              {showMenu ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-6 h-6 fill-current absolute top-0 right-0 mt-12  mr-12 cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-6 h-6 fill-current "
                />
              )}
            </button>

            <div
              className={` lg:flex lg:items-center lg:w-auto ${
                showMenu ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center">
                <li className=" my-2 md:my-0">
                  <ActiveLink className="font-semibold hover:text-blue-600" to="/">
                    Home
                  </ActiveLink>
                </li>
                <li className=" my-2 md:my-0">
                  <ActiveLink
                    className="font-semibold hover:text-blue-600"
                    to="/statistics"
                  >
                    Statistics
                  </ActiveLink>
                </li>
                <li className=" my-2 md:my-0">
                  <ActiveLink
                    className="font-semibold hover:text-blue-600"
                    to="/appliedjobs"
                  >
                    Applied Jobs
                  </ActiveLink>
                </li>
                <li className=" my-2 md:my-0">
                  <ActiveLink
                    className="font-semibold hover:text-blue-600"
                    to="/blog"
                  >
                    Blog
                  </ActiveLink>
                </li>
              </ul>
              <button className="px-4 ml-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out bg-gradient-to-r from-purple-300 to-indigo-500 hover:from-indigo-500 hover:to-purple-300 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Start Apply
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
