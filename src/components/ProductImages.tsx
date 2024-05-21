"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/12715509/pexels-photo-12715509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/4430925/pexels-photo-4430925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/4430943/pexels-photo-4430943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4430936/pexels-photo-4430936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  console.log(images);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          sizes="50vw"
          className="rounded-md object-cover"
          alt="Product"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="w-1/4 h-32 relative mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              fill
              sizes="30vw"
              className="rounded-md object-cover"
              alt="Product"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
