"use client"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Image from "next/image"
import { socials } from "./Components/Header"
import Link from "next/link"
import Error from "./error"
const page = () => {
  return (
    <>
      <Header active="about"/>
      <div className="relative w-full h-screen">
        <div className="absolute left-0 right-0 h-full z-20"> 
          
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
        <div className="content relative z-30 w-full text-center px-6">
          <div className='flex justify-center items-center flex-col h-screen'>
            <h6 className='text-center text-white text-6xl font-black mb-6 tablet:text-8xl desktop:text-9xl desktop:leading-[8rem]'>Not found</h6>
            <p className='text-center text-lg text-accent w-80 font-normal mb-12 desktop:text-xl desktop:leading-7'>The resource your trying to get does not exist.</p>    
            <Link href="/" scroll={false}>
              <button className='btn bg-transparent text-accent border-accent hover:text-darker-blue hover:bg-accent mr-4'>
                Return to homepage
              </button>
            </Link>          
          </div>
        </div> 
      </div>
      
      <Footer />
      
    </>
  )
}

export default page