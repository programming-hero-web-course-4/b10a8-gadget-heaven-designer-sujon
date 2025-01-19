import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ProductContainer from "../components/ProductContainer";

const HomeLayout = () => {
  return (
    <div className="bg-gray-100 py-6">
      <header className="max-w-7xl mx-auto h-[570px] bg-[#9538E2] rounded-xl relative">
        <nav className="max-w-6xl mx-auto py-2">
          <Navbar></Navbar>
        </nav>
        <div className="">
          <Banner></Banner>
        </div>
      </header>
      <main className="mt-[500px]">
        <ProductContainer></ProductContainer>
      </main>
      <footer className="relative">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
