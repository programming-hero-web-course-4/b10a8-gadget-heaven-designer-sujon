import React from "react";

const ProductContainer = () => {
  const products = {
    category: ['All Product', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook']
  }
  return (
    <div className="">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6 mt-10 mb-10">
      <div className="bg-white border-gray-200 h-60 grid col-span-1 rounded-xl">
      {
        products.category.map(product=> (<btn className="btn">{product}</btn>))
      }
      </div>
      <div className="bg-red-200 col-span-3 rounded-xl">

      </div>
      </div>
    </div>
  );
};

export default ProductContainer;
