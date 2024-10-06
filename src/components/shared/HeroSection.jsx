import React from "react";
import { IoSearch } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="bg-green-100 h-[calc(100vh - 80px)]">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-8 py-12">
        <div className="flex flex-col items-start space-y-6 lg:space-y-12 lg:w-1/2">
          <span className="text-lg lg:text-xl font-bold">
            In this season, find the best
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Exclusive collection
            <span className="block">for everyone</span>
          </h1>
          <button className="border-2 flex items-center border-white bg-black text-white px-4 py-2 rounded-full transition  hover:opacity-80">
            <span className="text-lg lg:text-xl font-bold px-3 py-1.5">
              Explore now
            </span>
            <IoSearch className="text-xl lg:text-2xl" />
          </button>
        </div>

        <div className="flex justify-center lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_img_with_text_2.png"
            alt="A display of our exclusive collection for everyone"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
