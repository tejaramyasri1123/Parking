import React from "react";
import Process from "../Process";

const Hostingprocess = () => {
  return (
    <div className="mt-[5rem] mx-[7rem]">
      <h1 className="text-4xl font-bold">
        How to list your place on{" "}
        <span className="text-orange-400">Parkvue?</span>
      </h1>
      <Process
      
        number="1"
        heading="Register your location"
        text="Register your location by following simple and easy steps like uploading images and documents which shows that your property is legit"
        imageurl="https://www.nhada.com/hubfs/insurance.png#keepProtocol"
      />
      <Process
      layoutType="imageFirst"
        number="2"
        heading="Get verified"
        text="After You listed your location our team will quick verify it weather it is legit or not once it was verfied you can start earning"
        imageurl="https://web.protildo.com/wp-content/uploads/2022/02/Background-Verification-Process-in-MNCs.jpeg"
      />
      <Process
        number="3"
        heading="Accept Bookings and start earning"
        text="Our secure payment system means you never have to deal with money directly. you will recieve notification about any booking in advance"
        imageurl="https://m.foolcdn.com/media/millionacres/images/paying_rent_contract.width-1440.jpg"
      />
    </div>
  );
};

export default Hostingprocess;
