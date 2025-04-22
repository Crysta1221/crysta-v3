"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
import { SwiperOptions } from "swiper/types";
import { useState, useRef } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const breakpoints: SwiperOptions["breakpoints"] = {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
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
    <div className='flex flex-col'>
      <div className='mx-6 md:mx-8 lg:mx-0 lg:ml-6'>
        <Swiper
          className='w-full h-full'
          slidesPerView={1.1}
          spaceBetween={15}
          centeredSlides={false}
          breakpoints={breakpoints}
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          initialSlide={0}>
          {slide_data.map((slide, index) => (
            <SwiperSlide key={index} className='px-2 py-2'>
              <p className='ml-2 sm:hidden font-bold text-lg mb-2 sm:mb-0'>
                {slide.title}
              </p>
              <div className='relative w-full aspect-[3/2.5] sm:aspect-[16/7] md:aspect-[20/10] lg:aspect-[16/8] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden'>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1000}
                  height={500}
                  className='object-cover w-full h-full'
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-5'></div>{" "}
                <div className='absolute bottom-0 mx-2 lg:mx-6 mb-4 left-0 right-0 p-2 lg:p-4 flex justify-between items-end'>
                  <div className='text-white text-left'>
                    <h2 className='hidden sm:block text-xl sm:text-2xl font-bold'>
                      {slide.title}
                    </h2>
                    <p className='mt-1 text-white line-clamp-2 sm:line-clamp-3'>
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
      <div className='flex justify-center items-center mt-4'>
        <div className='flex gap-2'>
          {slide_data.map((_, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "bg-black dark:bg-white"
                  : "bg-neutral-300 dark:bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
