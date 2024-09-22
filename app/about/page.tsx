"use client"

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Image from "next/image"
import { socials } from "../Components/Header"
import Link from "next/link"

const page = () => {
  return (
    <>
        <Header active="about"/>
        <div className="relative w-full h-screen">
          <div className="absolute left-0 right-0 h-screen z-20"> 
            
            <Image 
                src={"/about_page/background_image.png"}
                alt="background-image"
                fill
                sizes="100%"
                className="object-cover"
                draggable={false}
                priority={true}
                quality={100}
            />
          
            
          </div>
          <div className="content z-30 pt-24 w-full h-screen text-center px-6 tablet:pt-[8.25rem] ">
            <h1 className="relative text-white text-4xl font-bold z-30 mt-12 mb-16 tablet:text-[4rem] tablet:leading-[4rem] desktop:text-8xl">Why I made this?</h1>
            <p className="relative mb- text-white text-base z-30 font-medium font-main leading-6 text-[#DADCE0] mb-16 tablet:mb-16 tablet:m-auto  tablet:w-[37.25rem]">This project is powered by <a href="https://jikan.moe/" target="_blank" className="text-accent underline">JIKAN API</a> and aims to serves as a medium for learning frontend development by demonstrating and utilizing on-demand tools and technologies including but not limited to <a href="https://nextjs.org/docs" target="_blank" className="text-accent underline">Nextjs</a>, <a href="https://tailwindcss.com/" target="_blank" className="text-accent underline">Tailwindcss</a> and <a href="https://react.dev/" target="_blank" className="text-accent underline">ReactJs</a>. By integrating these technologies, the project provides a hands-on learning experience for developing modern, responsive, and efficient web applications, integrating external API and provide an immersive user experience to it’s end users.</p>
            <p className="relative z-30 w-full text-center text-accent italic font-medium mb-1">Get in Touch</p>
            <p className="text-accent italic w-full relative z-30 text-center mb-4">markadreianramos@gmail.com</p>
            <div className="m-auto hidden h-60 relative z-30 tablet:flex tablet:flex-wrap tablet:justify-center tablet:items-start">
              
              {
                socials.map((item, index) => <Link key={index} href={item.destination} target="_blank">
                  <button  className={`bg-transparent text-white flex border-none p-6 border-spacing-2 hover:bg-hover-state rounded-lg`}>
                    <div className="relative w-6 h-6  mr-6">
                      <Image src={item.icon} alt="social-icon" fill sizes="100%" className="object-cover"/>
                    </div>
                    
                    <p>{item.menuTitle}</p>
                  </button>
                </Link>)
              }
              
            </div>
            
          </div> 
          <Footer />
        </div>
        
        
        
    </>
  )
}

export default page