import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Slider from "./slider/Slider";
import SliderCard from "./slider/SliderCard";
import DateSelector from "./DateSelector";
import UserContext from "../Context/UserContext";

const EmptyTest = () => {
  const {user} = useContext(UserContext)
  console.log(user)
  return (
    <div className=" bg-gray-200">
      <h1 className="text-black text-2xl">{user.price}</h1>
    </div>
  );
};

export default EmptyTest;
