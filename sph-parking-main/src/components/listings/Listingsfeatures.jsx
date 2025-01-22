import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import Cards from "../Cards";

const Listingsfeatures = () => {
  return (
    <div className="mt-[5rem] mx-[7rem]">
      <h1 className="font-bold text-3xl">Why to host on ParkVue?</h1>
      <div className="container grid grid-cols-3 space-x-4 mt-[3rem] ">
        <Cards
          icon={<AiOutlineSafetyCertificate />}
          heading="safe and secure"
          altp="Safety is our utmost concern at ParkVue. With 24/7 monitoring and proactive measures, we ensure a secure environment for all listings. Our stringent verification process and advanced technology safeguard every interaction, providing peace of mind for hosts and guests alike"
        />
        <Cards
          icon={<RiCustomerService2Fill />}
          heading="Customer support"
          altp="At ParkVue, exceptional customer support is our commitment. Our dedicated team is available 24/7 to assist you with any questions, concerns, or inquiries. With personalized assistance and prompt resolution"
        />
        <Cards
          icon={<MdAttachMoney/>}
          heading="Host and earn"
          altp="List your space on ParkVue and earn money effortlessly. Join our platform to turn your empty space into a lucrative income stream. Start hosting today and unlock new earning opportunities with ParkVue"
        />
      </div>
    </div>
  );
};

export default Listingsfeatures;
