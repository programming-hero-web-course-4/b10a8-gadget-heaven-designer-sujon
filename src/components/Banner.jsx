import React from "react";
import bImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto border-4 border-white p-4 rounded-2xl">
      <img className="rounded-2xl" src={bImage} alt="" />
    </div>
  );
};

export default Banner;
