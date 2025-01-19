import React from "react";
import bImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold text-center max-w-4xl mt-6 mx-auto leading-snug">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white mt-6 max-w-2xl mx-auto text-center text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white px-4 py-2 mt-6 mb-6 text-[#9538E2] rounded-full text-center font-bold hover:bg-gray-200 ">
          Shop Now
        </button>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden border-4 border-gray-100 p-3 rounded-2xl">
        <img className="rounded-2xl" src={bImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
