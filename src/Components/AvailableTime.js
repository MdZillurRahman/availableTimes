import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { toast } from "react-toastify";

const AvailableTime = ({ availableTime }) => {
  const { availableTimes, meetsNumber, day, slots, text } = availableTime;


  const handleSubscribe = () => {
    const subscription = {
      availableTimes: availableTimes,
      meetsNumber: meetsNumber,
      day: day,
      slots: slots,
      text: text,
      subscribed: true,
    };

    fetch(`https://62c2ebde876c4700f5324572.mockapi.io/subscribed`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscription),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    toast("Subscribed!!");
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-xl cursor-pointer h-[400px] font-sans">
        <div className="font-normal">
          <p className="font-medium text-[32px] leading-10 mb-4">{availableTimes}</p>
          <div className="font-normal text-[16px] leading-[26px]">
            <p>{meetsNumber}</p>
            <p>{day}</p>
            <p>{slots}</p>
            <p className="text-[#585037]">{text}</p>
          </div>
          <button className="text-[18px] font-medium text-[#380596] hover:underline my-4 flex items-center gap-1 my-6">
            Show Details <FiChevronDown className="mt-1 font-medium" />
          </button>
        </div>
        
        <button
          className="font-medium text-[18px] leading-[18px] text-white text-center bg-[#4B01D4] px-9 py-3 rounded-full absolute bottom-4 left-4 m-3"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default AvailableTime;
