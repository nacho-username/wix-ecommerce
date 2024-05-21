import React from "react";

const CustomiseProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Colour</h4>
      <ul className="flex items-center gap-4">
        <li className="w-8 h-8 bg-red-500 ring-1 ring-gray-300 relative rounded-full cursor-pointer">
          <div className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 bg-blue-500 ring-1 ring-gray-300 relative rounded-full cursor-pointer"></li>
        <li className="w-8 h-8 bg-green-500 ring-1 ring-gray-300 relative rounded-full cursor-not-allowed">
          <div className="w-10 h-[2px] rounded-full bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-4">
        <li className="ring-1 ring-primary text-primary rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-primary text-white bg-primary rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomiseProducts;
