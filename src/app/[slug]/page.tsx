import AddToCart from "@/components/AddToCart";
import CustomiseProducts from "@/components/CustomiseProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies, justo nec aliquam luctus, nisl nunc volutpat justo, nec
          ultricies turpis nunc vel nunc. Donec nec tortor in nunc tincidunt
          fermentum. Nullam nec odio nec.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomiseProducts />
        <AddToCart />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm space-y-2">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque
            debitis id blanditiis itaque eligendi soluta fugit tempore in,
            facere impedit quasi quas quis. Ipsa officiis quos deserunt ipsam
            illum.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque
            debitis id blanditiis itaque eligendi soluta fugit tempore in,
            facere impedit quasi quas quis. Ipsa officiis quos deserunt ipsam
            illum.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque
            debitis id blanditiis itaque eligendi soluta fugit tempore in,
            facere impedit quasi quas quis. Ipsa officiis quos deserunt ipsam
            illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
