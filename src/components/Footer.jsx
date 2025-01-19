import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className=" py-6">
        <h1 className="text-center text-3xl font-bold">Gadget Heaven</h1>
        <p className="text-center mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr className="mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center items-center gap-1">
          <h2 className="font-semibold text-2xl mb-4">Services</h2>
          <p className="text-lg text-gray-600 ">Product Support</p>
          <p className="text-lg text-gray-600 ">Order Tracking</p>
          <p className="text-lg text-gray-600 ">Shipping & Delivery</p>
          <p className="text-lg text-gray-600 ">Returns</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h2 className="font-semibold text-2xl mb-4">Company</h2>
          <p className="text-lg text-gray-600 ">About Us</p>
          <p className="text-lg text-gray-600 ">Career</p>
          <p className="text-lg text-gray-600 ">Contacts</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h2 className="font-semibold text-2xl mb-4">Legal</h2>
          <p className="text-lg text-gray-600 ">Terms of Service</p>
          <p className="text-lg text-gray-600 ">Privacy Policy</p>
          <p className="text-lg text-gray-600 ">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
