"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
import { SwiperOptions } from "swiper/types";
import { useState } from "react";

interface SlideData {
  title: string;
  description: string;
  category: "Release Note" | "Announcement";
  image: string;
  label: string;
}

const slide_data: SlideData[] = [
  {
    title: "CrystaWorld Update",
    description: "Crystaworldが生まれ変わりました",
    category: "Announcement",
    image: "/sample.jpg",
    label: "Read more",
  },
  {
    title: "CrystaWorld Update2",
    description: "Crystaworldが生まれ変わりました",
    category: "Announcement",
    image: "/sample.jpg",
    label: "Read more",
  },
  {
    title: "CrystaWorld Update3",
    description: "Crystaworldが生まれ変わりました",
    category: "Announcement",
    image: "/sample.jpg",
    label: "Read more",
  },
];

export const HomeCarousel = () => {
  const breakpoints: SwiperOptions["breakpoints"] = {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 5,
      centeredSlides: false,
    },
    640: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    850: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 1.7,
      spaceBetween: 20,
      centeredSlides: false,
    },
  };
  return (
    <div>
      <Swiper
        className='w-full h-full'
        slidesPerView={1.1}
        spaceBetween={15}
        centeredSlides={false}
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        initialSlide={0}>
        {" "}
        {slide_data.map((slide, index) => (
          <SwiperSlide key={index} className='px-2 py-2'>
            <div className='relative w-full aspect-[3/2.5] sm:aspect-[16/7] md:aspect-[20/10] lg:aspect-[16/8] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden'>
              {" "}
              <Image
                src={slide.image}
                alt={slide.title}
                width={1000}
                height={500}
                className='object-cover w-full h-full'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-5'></div>{" "}
              <div className='absolute bottom-0 mx-6 mb-4 left-0 right-0 p-4 flex justify-between items-end'>
                <div className='text-white text-left'>
                  <h2 className='hidden sm:block text-xl sm:text-2xl font-bold'>
                    {slide.title}
                  </h2>
                  <p className='mt-1 text-white/80 line-clamp-2 sm:line-clamp-3'>
                    {slide.description}
                  </p>
                </div>
                <Button className='rounded-full'>{slide.label}</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
