import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white cursor-pointer max-w-[12rem] max-h-[15rem] rounded overflow-hidden shadow-lg"
    >
      <img
        className="w-full z-h-[8rem]"
        src="/images/isagi.jpeg"
        alt="Sunset in the mountains"
      />
      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-400 text-l">{product.name}</h2>
        <div className="font-semibold text-l mb-1 overflow-hidden line-clamp-1 ">
          {product.desc}
        </div>
        <p className="text-gray-700 text-base">₹{product.price}</p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default Card;
