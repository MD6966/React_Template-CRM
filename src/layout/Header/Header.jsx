import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`
        flex justify-between items-center px-6 py-4
        bg-white dark:bg-gray-900
        ${theme === "dark" ? "shadow-md shadow-white/20" : ""}
      `}
    >
      {/* Logo */}
      <img src="logo (2).png" alt="" className="w-20 invert-0 dark:invert" />

      <div className="flex items-center space-x-4">

        {/* Notification Button */}
        <div className="relative">
          <button className="text-white bg-gradient-to-b from-primarycolor to-secondarycolor rounded-full mt-1.5 hover:text-gray-800 dark:hover:text-gray-200">
            <FaRegBell className="text-4xl p-2" />
          </button>
        </div>

        {/* Beautiful Theme Toggle Button - Matching Your Site Gradient */}
        <button
          onClick={toggleTheme}
          className="relative w-16 h-8 rounded-full bg-gradient-to-b from-primarycolor to-secondarycolor transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <div
            className={`
              absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md
              transform transition-all duration-300 ease-in-out
              flex items-center justify-center
              ${theme === "dark" ? "translate-x-8" : "translate-x-0"}
            `}
          >
            {theme === "light" ? (
              <MdSunny className="text-yellow-500 text-sm" />
            ) : (
              <IoMoon className="text-indigo-600 text-sm" />
            )}
          </div>
        </button>

        {/* Profile Section */}
        <div className="flex items-center">
          <h1 className="bg-gradient-to-b from-primarycolor to-secondarycolor text-white rounded-full">
            <IoPersonOutline className="text-4xl p-2" />
          </h1>

          <span className="ml-2 text-xl font-bold text-primarycolor dark:text-secondarycolor">
            My Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;