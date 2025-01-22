import React from "react";

const Cards = ({icon,heading,altp}) => {
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden w-[400px] h-[350px] my-3 py-4 px-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex items-center justify-center mb-4">
        {/* Render the icon component */}
        <div className="text-5xl text-orange-500">{icon}</div>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-3xl text-gray-800 mb-2">{heading}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{altp}</p>
      </div>
      
    </div>
  );
};

export default Cards;
