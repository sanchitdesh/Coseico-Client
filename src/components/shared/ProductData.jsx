import { useRef, useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import ProductCard from "./ProductCards";

const ProductData = () => {
  const scrollRef = useRef();
  const [cardWidth, setCardWidth] = useState(0);

  // Number of cards to display on the screen at a time
  const visibleCards = 4;

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const getCardWidth = width / visibleCards;
      setCardWidth(getCardWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-12 lg:px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-medium">
          New Arrivals.{" "}
          <span className="text-4xl font-medium text-gray-500">
            REY backpacks & bags
          </span>
        </h1>

        <div className="flex space-x-4">
          <button
            onClick={scrollLeft}
            className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center"
          >
            <MdOutlineKeyboardArrowLeft size={30} />
          </button>

          <button
            onClick={scrollRight}
            className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center"
          >
            <MdOutlineKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: cardWidth }}
          >
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
