import React from "react";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto h-[550px] bg-[#9538E2] rounded-xl">
        <nav className="max-w-6xl mx-auto py-2">
          <Navbar></Navbar>
        </nav>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold text-center max-w-4xl mt-6 mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white mt-6 max-w-2xl mx-auto text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white px-4 py-2 mt-6 text-[#9538E2] rounded-full text-center ">
            Shop Now
          </button>
        </section>
      </header>
      <h1>Home Layout</h1>
    </div>
  );
};

export default HomeLayout;
