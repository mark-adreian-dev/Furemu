'use client'

import Header from '@/app/Components/Header'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Components/Footer'
 
const Error = () => {
  return (
    // === "TypeError" ? "Failed to fetch resource" : "Something went wrong!"
    <>
      <Header /> 
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
          <div className='relative z-30 w-screen h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
              <h6 className='text-center text-white text-6xl font-black mb-6 tablet:text-8xl desktop:text-9xl desktop:leading-[8rem]'>Ops Sorry!</h6>
              <p className='text-center text-lg text-accent w-80 font-normal mb-12 desktop:text-xl desktop:leading-7'>Something went wrong, Please try refreshing the page</p>
              <div className='buttons'>    
                <a href="/">
                  <button className='btn bg-transparent text-accent border-accent hover:text-darker-blue hover:bg-accent mr-4'>
                    Homepage
                  </button>
                </a>    
                <button onClick={() => location.reload()} className='btn bg-accent border-accent text-darker-blue hover:bg-white'>Refresh</button>
              </div>
            </div>
            
          </div> 
        
        </div>
       

    </>
  )
}

export default Error