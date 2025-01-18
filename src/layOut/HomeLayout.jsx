import React from "react";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto bg-[#9538E2] rounded-xl">
        <nav className="max-w-6xl mx-auto py-2">
          <Navbar></Navbar>
        </nav>
        <section>
          <h1 className="text-5xl text-white font-bold text-center max-w-4xl mt-6 mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
        </section>
      </header>
      <h1>Home Layout</h1>
    </div>
  );
};

export default HomeLayout;
