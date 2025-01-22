import React, { useContext } from "react";
import bg from "./image.jpg";
import Listingsfeatures from "./Listingsfeatures";
import Hostingprocess from "./Hostingprocess";
import Bgimage from "../Bgimage";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const ListingHome = () => {
  const {user} = useContext(UserContext)
  const realb =
    "https://live.staticflickr.com/3562/3773138341_cd2ac78a6e_b.jpg";
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  console.log(window.screen.width)
  console.log(user)


  return (
    <div>
      <div className="h-screen w-screen relative " style={style}>
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="h-full w-full flex flex-col justify-center px-[10rem] pb-[100px]">
          <h3 className="font-bold text-white text-lg">
            List your space on park vue
          </h3>
          <h1 className="w-1/4 text-[2rem] text-white font-bold">
            Turn Your Empty Space into Cash:
          </h1>
          <h1 className="w-1/3 text-[2.5rem] text-white font-bold">
            List Your Parking Spot
          </h1>
          <Link to="/listingpage">
            <button className="bg-orange-400 px-4 w-[10rem] mt-2 text-white font-bold h-[30px]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Hostingprocess />
        <div className="mb-[150px]">
          <Listingsfeatures />
        </div>

        <Bgimage
          Link1
          bg={realb}
          heading="Having Stress With parking?"
          text="Book on park Vue.Enjoy stressless parking with minimal charges at fully secured locations"
          button="Book Now"
        />
      </div>
    </div>
  );
};

export default ListingHome;
