import React from "react";

const MissionSection = () => {
  const bg = "https://wallpapercave.com/wp/wp8106530.jpg";
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="h-[900px] bg-fixed bg-parllax w-screen relative  "
      style={style}
    >
      <div className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl top-0 font-extrabold mt-3">
          Our mission
        </h1>

        <div className="bg-white w-3/5 h-[700px] m-10">
          <p className="text-xl m-10 font-bold text-center">
            In the heart of India's bustling urban landscapes, ParkVue stands
            committed to tackling the pervasive challenges of parking with
            clarity and innovation. Our mission is to alleviate the stress and
            inefficiencies surrounding parking in Indian cities, transforming
            them into spaces of seamless accessibility and efficiency. We are
            driven by a deep understanding of the unique complexities of India's
            parking landscape – from congested streets to limited
            infrastructure. Our goal is to empower Indian communities with
            tailored solutions that address the specific needs and demands of
            local parking environments. Through technology-driven platforms and
            community-centric initiatives, we strive to revolutionize how
            parking is perceived and managed across India. By offering intuitive
            tools for finding, booking, and optimizing parking spaces, we aim to
            simplify the daily commute and enhance urban mobility for millions
            of Indians. At ParkVue, our mission is not only to provide solutions
            but to be a catalyst for positive change – driving towards cleaner,
            safer, and more sustainable cities for generations to come.
            Navigating the intricate parking landscape of India's bustling
            cities, ParkVue is committed to unraveling the complexities and
            inefficiencies that plague urban parking scenarios. Our mission
            transcends mere convenience; it's about reshaping the very fabric of
            urban mobility by clearing the clutter and bottlenecks that hinder
            seamless parking experiences. With an acute awareness of India's
            parking woes – from congested streets to inadequate infrastructure –
            we embark on a journey to redefine the norm. Our mission is to
            empower Indian communities with sophisticated solutions crafted to
            address the nuances of local parking challenges.
          </p>
        </div>
        <div className="absolute inset-0  bg-orange-200 opacity-20"></div>
      </div>
    </div>
  );
};

export default MissionSection;
