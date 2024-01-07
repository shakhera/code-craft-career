import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="bg-gray-100">
        {/* <nav className="bg-gradient-to-r from-purple-300 to-indigo-500"> */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <a className="text-3xl font-bold font-mono" href="#">
              CodeCraftCareer
            </a>
            <button
              className="block lg:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              {showMenu ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-6 h-6 fill-current"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-6 h-6 fill-current"
                />
              )}
            </button>

            <div
              className={`lg:flex lg:items-center lg:w-auto ${
                showMenu ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
                <li>
                  <a className="font-semibold hover:text-blue-600" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold hover:text-blue-600"
                    href="/statistics"
                  >
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold hover:text-blue-600"
                    href="/appliedjobs"
                  >
                    Applied Jobs
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-600" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
              {/* <button className="ml-5 px-4 py-2 text-white font-bold rounded bg-gradient-to-r from-purple-300 to-indigo-500 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-800">
              Start Apply
              </button> */}
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
