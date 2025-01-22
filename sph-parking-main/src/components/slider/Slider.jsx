import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css"
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import SliderCard from "./SliderCard";

const Slider = () => {
  const img1 =
    "https://img.freepik.com/premium-vector/confident-businessman-shaking-hands-from-smartphone-business-web-cloud-partnership-agreement_610956-406.jpg?w=740";
  const img2 =
    "https://assets.website-files.com/5f108ad27d6b51595a1f549a/6021218a7ef6777e149cfc0b_secure%20payment%20method%202.jpg";
  const img3 =
    "https://th.bing.com/th/id/R.8c9c43831fefb257d7a1166b28dfdbe1?rik=7W7%2fTEvCsD%2bHsQ&riu=http%3a%2f%2fteamabc.co.uk%2fwp-content%2fuploads%2f2018%2f03%2fcar-park.jpg&ehk=8V0HHNWnIr%2f4ombyew9qcyAeJcuGArO%2bU72Wp8EfL%2bE%3d&risl=&pid=ImgRaw&r=0";
  const img4 =
    "https://th.bing.com/th/id/OIP.KaR-y2cEJ6UlLXSF27avGQHaE8?rs=1&pid=ImgDetMain";
  const img5 =
    "https://www.businessinsider.in/photo/82222430/what-are-push-notifications-how-the-pop-up-alerts-sent-by-apps-devices-and-browsers-work.jpg?imgsize=142568";
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">why parkvue?</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{ rotate: 0, strech: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        autoplay={{ delay: 1000 }} // Corrected autoplay prop
      >
        <SwiperSlide>
          <SliderCard
            src={img4}
            heading="Responsive Customer Support"
            text=" ParkVue provides prompt and attentive customer support through various channels, ensuring users receive assistance, guidance, and resolution to inquiries or issues swiftly, enhancing overall satisfaction and user experience"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            src={img3}
            heading="Monetize your unused assets"
            text="ParkVue empowers users to effortlessly list their parking spaces, enabling them to monetize unused assets while expanding the platform's parking inventory for a more robust and diversified parking solution"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            src={img5}
            heading="Timely Notifications and alerts"
            text="ParkVue keeps users informed with timely notifications and alerts, providing updates on booking confirmations, reminders, and important announcements, enhancing convenience and ensuring a smooth parking experience"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            src={img1}
            heading="User-friendly parking booking"
            text="ParkVue streamlines the process of finding and reserving parking spaces, offering intuitive search options and a simple booking process for users' convenience."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            src={img2}
            heading="Secure Payment options"
            text="ParkVue ensures peace of mind by offering secure payment methods, safeguarding users' financial information throughout transactions for seamless and worry-free booking experiences"
          />
        </SwiperSlide>
        {/* <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
};

export default Slider;
