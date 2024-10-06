import React from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";

const ProductCard = () => {
  return (
    <div className="flex flex-col space-y-4 w-[90%] h-auto mb-12">
      <div className="relative group">
        {/* Product Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CMM6590.webp?v=1714211055&width=800&crop=center"
          alt="Blue Silk Tuxedo"
          className="rounded-3xl object-cover w-full h-[340px]"
        />

        {/* Favorite Icon */}
        <span className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-lg">
          <CiHeart size={24} />
        </span>

        {/* "Add to Bag" button */}
        <button className="absolute whitespace-nowrap flex items-center bottom-6 left-1/2 transform -translate-x-1/2 translate-y-4 bg-black text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out shadow-lg">
          <RiShoppingBag4Line size={15} className="mr-2" />
          <span className="text-sm">Add to Bag</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="px-3 flex flex-col space-y-2">
        <div className="flex space-x-2">
          {/* Color Options */}
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        </div>

        <h2 className="text-lg font-bold text-gray-800">Blue Silk Tuxedo</h2>
        <span className="text-gray-600">Available in multiple colors</span>

        <div className="flex justify-between items-center">
          {/* Price */}
          <span className="text-green-500 font-semibold border-2 border-green-400 px-4 py-1 rounded-lg">
            $70.00
          </span>

          {/* Rating */}
          <span className="flex items-center text-gray-600">
            <FaStar size={18} className="mr-1 text-yellow-400" />
            5.0 (1 Review)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
