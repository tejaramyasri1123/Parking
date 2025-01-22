import React from "react";

const SliderCard = (props) => {
  return (
    <div className=" container w-[300px] h-[450px] shadow-md flex flex-col items-center justify-center mx-20">
      <img
        src={props.src}
        className="w-full h-1/3 rounded-none"
      />
      <div className="mx-2">
        <h1 className="font-bold text-2xl my-3">{props.heading}</h1>
        <p className="w-full h-auto">{props.text}</p>
      </div>
    </div>
  );
};

export default SliderCard;
