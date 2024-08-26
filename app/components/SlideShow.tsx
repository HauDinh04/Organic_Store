// components/Slideshow.js

"use client"; // Đảm bảo rằng thành phần này được coi là Client Component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/slideshow/6.svg",
  "/slideshow/slide1.svg",
  "/slideshow/2.svg",
  "/slideshow/3.svg",
  "/slideshow/4.svg",
  "/slideshow/5.svg",
  "/slideshow/7.svg",
  "/slideshow/1.svg",
];

export default function Slideshow() {
  return (
    <div className="flex justify-center items-center mt-2 rounded-md object-cover">
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
        style={{ width: "1200px", height: "300px" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: "800px", height: "400px" }}>
            <Image
              src={src}
              alt={`slide ${index + 1}`}
              width={800}
              height={400}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
