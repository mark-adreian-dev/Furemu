"use client"
import { useState, useEffect } from "react"
import Header from "../../Components/Header"
import { Breakpoints } from "@/app/Types/Enums"
import Image from "next/image"
import banner from "@/HeroBannerData.json";
import { BannerSlide } from "@/app/Types/BannerType"

const bannerData: BannerSlide[] = banner.data;
const loading = () => {
const [screenSize, setScreenSize] = useState<string>();
useEffect(() => {
    const updateScreenSize = () => {
        if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop");
        else if (window.innerWidth >= Breakpoints.TABLET) setScreenSize("tablet");
        else setScreenSize("mobile");
    };
    updateScreenSize()
    
    }, []);
  return (
    <>
        <Header active={"anime"} page="search" />
        <div className="absolute z-0 background-image w-full h-[43.8125rem] bg-darker-blue">
            <Image
            src={
                screenSize === "mobile"
                ? bannerData[4].imagePathMobile
                : screenSize === "tablet"
                ? bannerData[4].imagePathTablet
                : bannerData[4].imagePathDesktop
            }
            alt="background-image"
            fill
            sizes="100%"
            className="object-cover object-bottom"
            draggable={false}
            priority={true}
            quality={100}
            />
      </div>
      <div className="content relative z-20 w-full pt-24 px-6 tablet:px-8 tablet:pt-[8.25rem] desktop:flex desktop:px-16 desktop:pt-[10.25rem]">
        <div className="right w-full relative">
            <div className="input flex items-center gap-2 px-4 py-3.5 border-accent border-solid border-2 rounded-lg bg-transparent">
                <input id="anime-query" type="text" className="grow text-sm text-white font-medium bg-transparent outline-none font-main" />
            </div>
            <div className="h-[calc(100vh-18rem)] flex flex-col justify-center items-center">
                <span className="w-32 h-32 loading loading-ring mb-2 block"></span>
                <p className="text-white italic">Searching results...</p>
            </div>
        </div>
      </div>
    </> 
  )
}

export default loading