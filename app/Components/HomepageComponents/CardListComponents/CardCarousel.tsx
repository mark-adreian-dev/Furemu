"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
interface Props {
  children: JSX.Element[];
  nextEl: string;
  prevEl: string;
}

const CardCarousel: React.FC<Props> = async ({ children, nextEl, prevEl }) => {
  const animeRef = useRef<any>();
  const [lazyLoadAnime, setLazyLoad]= useState()


  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: "." + nextEl,
        prevEl: "." + prevEl,
      }}
      slidesPerGroup={3}
      onSlideChange={() => {}}
      slidesPerView="auto"
      onSwiper={(swiper) => (animeRef.current = swiper)}
      initialSlide={0}
    >
      {children.map((child) => (
        <SwiperSlide key={children.indexOf(child)} className="mr-2">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
