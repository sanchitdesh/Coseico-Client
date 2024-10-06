import React from "react";

const CollectionCard = ({ img, description }) => {
  return (
    <div className="flex-shrink-0 w-[480px] h-[270px] rounded-xl overflow-hidden hover:bg-opacity-100 relative">
      <img
        src={img}
        alt="Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute pr-48 inset-0 flex flex-col justify-center items-start p-6 bg-opacity-50  space-y-3 rounded-xl">
        <h4 className="text-[16px]">Collection</h4>
        <h1 className="text-3xl font-bold pb-12">{description}</h1>
        <button className="mt-4 bg-white text-black rounded-full font-semibold px-6 py-3 transition hover:bg-gray-300">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;