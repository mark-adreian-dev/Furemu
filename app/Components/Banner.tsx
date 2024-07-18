"use client"

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import data from '../../data.json'

const heroSectionData = data.data



const Banner = () => {
    const swiperRef = useRef<any>()
    const [screenSize, setScreenSize] = useState<string>()
    const [activeSlide, setActiveSlide] = useState<number>(0)

    useEffect(() => {
        setScreenSize(window.innerWidth < 768 ? "mobile" : window.innerWidth < 1440 ? "tablet" : "desktop")
        
        window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth < 768 ? "mobile" : window.innerWidth < 1440 ? "tablet" : "desktop")
        })
    },[])


    return (
        <>
            <div className='hero-section relative flex justify-center items-center'>
                <div className='hero-content absolute z-40 w-fit h-fit flex flex-col tablet:hidden'>
                    <h1 className='text-white font-black text-hero-title-mobile'>Heroku</h1>
                    <p className='font-main font-medium leading-4 text-white text-xs w-[10.8125rem] text-center'>Immerse yourself with the latest and best animes here with us!</p>
                </div>
           
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
            onSlideChange={(slide) => {setActiveSlide(slide.realIndex)}}

            onSwiper={(swiper) => swiperRef.current = swiper}
            initialSlide={0}
            >     
                {
                heroSectionData.map(slide => 
                    <SwiperSlide key={slide.itemIndex} >
                    <div className='relative w-screen h-[26.5625rem] tablet:h-[43.8125rem]'>
                        <div className='absolute z-0 w-full h-full' style={{
                        backgroundImage: screenSize === "mobile" ? `url(${slide.imagePathMobile})` : screenSize === "tablet" ? `url(${slide.imagePathTablet})` :  `url(${slide.imagePathDesktop})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom'
                        }}></div>
                    </div>   
                    </SwiperSlide>)
                }  
            {
                heroSectionData.map(slide => activeSlide === slide.itemIndex && 
                <div key={slide.itemIndex} className='context absolute z-40 left-8 bottom-8 mobile:hidden tablet:block desktop:left-16'>
                    <h1 className="text-6xl text-accent font-bold w-[39.125rem] mb-6">{slide.description.title}</h1>
                    <p className='text-white w-[28.75rem] text-base leading-6 font-normal mb-6'>{slide.description.context}</p>
                    <button className="w-[7.375rem] py-[0.88rem] bg-accent px-[1rem] rounded-lg"><p className='text-sm text-darker-blue leading-5 font-semibold'>See More</p></button>
                </div> 
                )
            }
            </Swiper>
            <div className='swiper-pagination'></div>
            </div>
        </>
    )
}

export default Banner