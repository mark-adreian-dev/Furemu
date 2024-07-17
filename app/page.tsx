'use client'

import React, { useState, useRef } from 'react'
import Header from './GlobalComponents/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import data from '../data.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const heroSectionData = data.data

export default function Home() {
  const swiperRef = useRef<any>()
  return (
    <>
      <Header />
      <div className='hero-section relative flex justify-center items-center'>
        <div className='hero-content absolute z-40 w-fit h-fit flex flex-col'>
          <h1 className='text-white font-black text-hero-title-mobile'>Heroku</h1>
          <p className='font-main font-medium leading-4 text-white text-xs w-[10.8125rem] text-center'>Immerse yourself with the latest and best animes here with us!</p>
        </div>
        <div className='absolute bottom-0 swiper-pagination w-screen h-10 z-100'></div>
    
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}

          pagination={{ 
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true, 
            bulletClass: "bullet",
            bulletActiveClass: "active-bullet",
            
          }}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => swiperRef.current = swiper}
        >
       
            {
              heroSectionData.map(slide => 
                <SwiperSlide key={slide.itemIndex} >
                  <div className='relative w-screen h-[26.5625rem]'>
                    <div className='absolute z-0 w-full h-full' style={{
                      background: `url(${slide.imagePathMobile})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center bottom'
                    }}/>
                  </div>    
                </SwiperSlide>)
            }

          
        </Swiper>
      </div>
    </>
  );
}
