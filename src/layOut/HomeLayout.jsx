import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto h-[570px] bg-[#9538E2] rounded-xl relative">
        <nav className="max-w-6xl mx-auto py-2">
          <Navbar></Navbar>
        </nav>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold text-center max-w-4xl mt-6 mx-auto leading-snug">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white mt-6 max-w-2xl mx-auto text-center text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white px-4 py-2 mt-6 text-[#9538E2] rounded-full text-center font-bold hover:bg-gray-200 ">
            Shop Now
          </button>
          <div className="absolute top-96 left-40 mt-8">
            <Banner></Banner>
          </div>
        </section>
      </header>
      <main className="">
        <h1 className="text-center">Explore Cutting-Edge Gadgets</h1>
      </main>
      <footer className="mt-96">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
