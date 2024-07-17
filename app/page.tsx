'use client'

import React, { useState, useRef } from 'react'
import Header from './GlobalComponents/Header'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data.json'

const heroSectionData = data.data

export default function Home() {
  const swiperRef = useRef<any>()
  return (
    <>
      <Header />
      <div className='hero-section'>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
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
