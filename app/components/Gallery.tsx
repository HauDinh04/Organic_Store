'use client'
import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col  gap-3 max-w-[450px]">
      <Image
        src={mainImage}
        width={450}
        height={500}
        alt="product"
        className="w-95 h-95 rounded-lg shadow-lg object-cover "
      ></Image>
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={100}
            width={100}
            alt="image"
            className={`rounded-lg object-cover cursor-pointer ${
              mainImage === image
             ? 'border-2 border-black':""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
