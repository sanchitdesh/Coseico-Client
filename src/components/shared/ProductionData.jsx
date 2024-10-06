import React, { useRef } from "react";
import CollectionCard from "./CollectionCard";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const CollectionData = [
  {
    img: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CollectionH_Images-3.png?v=1714183684&width=800&height=432&crop=center",
    description: "Up to 80% off retail",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CollectionH_Images.png?v=1714183684&width=800&height=432&crop=center",
    description: "Give the gift of choice",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CollectionH_Images-7.png?v=1714183684&width=800&height=432&crop=center",
    description: "The latest from top brands",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/CollectionH_Images-4.png?v=1714183683&width=800&height=432&crop=center",
    description: "Beauty Collection",
  },
];

const ProductionData = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto bg-white h-auto ">
      <div className="container flex flex-col gap-12 mx-auto mt-24 pb-24">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl lg:mx-8 lg:text-4xl font-semibold">
            Discover more.{" "}
            <span className="text-gray-500">
              Good things are waiting for you
            </span>
          </h1>
          <div className="flex space-x-4 lg:mr-8">
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={scrollLeft}
            >
              <IoArrowBackSharp className="text-2xl" />
            </button>
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={scrollRight}
            >
              <IoArrowForwardSharp className="text-2xl" />
            </button>
          </div>
        </div>
        <div
          className="flex lg:mx-8 overflow-x-hidden space-x-4 scrollbar-hide"
          ref={scrollRef}
        >
          {CollectionData.map((item, index) => (
            <CollectionCard
              key={index}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionData;
