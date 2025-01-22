import React from "react";
import { Link } from "react-router-dom";
import bg from "../components/parkingbook/image.jpg";
const bg2 = "https://wallpaperaccess.com/full/4327493.jpg";

const Bgimage = (props) => {
  const style2 = {
    backgroundImage: `url(${props.bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="h-[300px]  w-screen relative" style={style2}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 w-1/2 bg-orange-100 opacity-50"></div>
      </div>
      <div className="flex flex-col text-white relative z-10 p-10">
        <h1 className="font-bold text-3xl">{props.heading}</h1>
        <p className="w-[500px] my-3">{props.text}</p>
        {props.Link1 ? (
          <Link to="/parkingpage">
            <button className="bg-orange-500 text-white w-[200px] p-3 text-lg font-bold rounded-md">
              {props.button}
            </button>
          </Link>
        ) : (
          <Link to="/listings">
            <button className="bg-orange-500 text-white w-[200px] p-3 text-lg font-bold rounded-md">
              {props.button}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Bgimage;
