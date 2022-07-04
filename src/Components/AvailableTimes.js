import React, { useEffect, useRef, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import AvailableTime from "./AvailableTime";
import left from "../Images/left-arrow-icon1.jpg";
import right from "../Images/right-arrow-icon1.jpg";

const AvailableTimes = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(
        `https://62c2ebde876c4700f5324572.mockapi.io/availableTimes`
      );
      const res = await fetchData.json();
      console.log(res);
      setAvailableTimes(res);
    }
    Data();
  }, []);

  return (
    <div className="mx-40 p-12">
      <div>
        <p className="text-white font-medium text-[32px] leading-10">Available Times</p>
        <p className="text-white font-normal text-[18px] leading-7 my-2">Almaty Time</p>
        <div className="flex justify-between">
          <div>
            <p className="text-[#C2C2C2] flex items-center gap-1 my-3  font-normal text-[18px] leading-7">
              <BiWorld /> This teacher may live in a different time zone.
            </p>
          </div>
          <div className="flex gap-1">
            <div ref={prevRef}>
              <img className="w-[50px] h-12 rounded-full mr-2" src={left} alt="" />
              
            </div>
            <div className="swiper-button" ref={nextRef}>
              <img className="w-[50px] h-12 rounded-full" src={right} alt="" />
              
            </div>
          </div>
        </div>

        <div>
          <p className="text-white border rounded-xl border-[#7E39AB] text-center p-4 font-normal text-[18px] leading-7 mt-6 mb-4 bg-[#5D15C5]">
            🔥 This class is in high demand! 12 of 35 classes have sold out.
          </p>
        </div>
      </div>

      <div className="p-2">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            console.log("Swiper instance:", swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {availableTimes.map((availableTime) => (
            <SwiperSlide>
              <AvailableTime
                key={availableTime.id}
                availableTime={availableTime}
              ></AvailableTime>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AvailableTimes;
