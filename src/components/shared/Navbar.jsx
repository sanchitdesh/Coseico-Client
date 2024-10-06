import React from "react";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="relative max-w-7xl mx-auto h-[80px] flex items-center">
      <div className="container px-[40px] flex items-center justify-between">
        {/* Logo and Shops Dropdown */}
        <div className="flex items-center justify-start gap-x-3 sm:gap-x-8 lg:flex-1">
          <div className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0874/8928/2359/files/logo.svg?v=1714142588&width=296&height=76&crop=center"
              alt="Logo"
              className="w-[138px] h-[38px]"
            />
          </div>
          <div className="w-[1px] h-[30px] bg-gray-300" />
          <div className="flex items-center py-2 h-10 sm:h-12 text-opacity-90">
            <span className="text-[16px] text-[#000000]">Shops</span>
            <RiArrowDropDownLine className="text-opacity-70 inline-block ml-2 h-7 w-7 text-neutral-700 group-hover:text-opacity-80 transition duration-150 ease-in-out align-middle" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex-1 flex items-center justify-end">
          {/* Language Selector */}
          <button className="text-opacity-80 group h-10 sm:h-12 px-3 py-1.5 inline-flex  items-center text-gray-800 font-medium text-sm cursor-pointer">
            <IoIosGlobe className="w-[18px] h-[18px] opacity-80" />
            <span className="ml-[8px] text-[14px] text-[#1f2937cc] ms-2">
              Language
            </span>
            <RiArrowDropDownLine className="block align-middle ms-1 h-7 w-7 text-opacity-70 transition duration-150 ease-in-out" />
          </button>

          {/* Search, User, and Messages Icons */}
          <div className="hidden lg:flex gap-4 items-center">
            <a
              href="#"
              className="list-none h-10 w-10 flex items-center justify-center rounded-full text-slate-700 sm:w-12 sm:h-12"
            >
              <IoSearch className="text-[25px]" />
            </a>
            <a
              href="#"
              className="list-none h-10 w-10 flex items-center justify-center rounded-full text-slate-700 sm:w-12 sm:h-12"
            >
              <FaRegUser className="text-[25px]" />
            </a>
            <a
              href="#"
              className="list-none h-10 w-10 flex items-center justify-center rounded-full text-slate-700 sm:w-12 sm:h-12 relative"
            >
              <span className="absolute top-1.5 right-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-blue-400 text-[9px] font-medium leading-none text-white ring ring-white sm:h-3.5 sm:w-3.5 sm:text-[10px]">
                0
              </span>
              <FaRegEnvelope className="text-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
