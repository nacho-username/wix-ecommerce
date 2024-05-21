"use client";

import React, { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 4;

  const handleQtyClick = (type: string) => {
    if (type === "inc" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Qty.</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              onClick={() => handleQtyClick("dec")}
              className="cursor-pointer text-xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleQtyClick("inc")}
              className="cursor-pointer text-xl"
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">3 items</span> left!
            <br /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 py-2 px-4 ring-primary text-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
