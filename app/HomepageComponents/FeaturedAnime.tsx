'use client'

import { useState, useEffect } from "react"
import { Breakpoints } from '../page';
import Image from "next/image"
import data from '../../FeaturedAnime.json'

interface ImagePath {
    "mobile": string
    "tablet": string
    "desktop": string
}

const featuredImage: ImagePath = data.data[0]

const FeaturedAnime = () => {
    const [screenSize, setScreenSize] = useState<string>("desktop")

    const updateScreenSize = () => {
      if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop")
      else if (window.innerWidth >= Breakpoints.TABLET)  setScreenSize("tablet")
      else setScreenSize("mobile") 
    }
  
    useEffect(() => {
      
        updateScreenSize()
        window.addEventListener('resize', () => updateScreenSize())
  
    },[])
    
    return (
        <div className='featured px-6 pb-16 relative tablet:px-8 desktop:px-16'>
            <div className={`overflow-hidden relative featured-image w-full h-[25.96875rem] rounded-3xl tablet:h-[42.25rem] desktop:h-[42.1875rem]`}>
                <Image src={featuredImage[screenSize as keyof typeof featuredImage]} alt="featured-image" fill className="object-cover" priority={true} quality={100} />

                <div className='absolute left-6 bottom-6 z-100 context tablet:left-16 tablet:bottom-16'>
                    <h1 className='text-accent text-2xl font-bold w-48 leading-6 mb-4 tablet:text-6xl tablet:w-[29.625rem]'>Frieren: Beyond Journey’s End</h1>
                    <p className='text-white text-xs w-64 leading-4 font-normal mb-4 tablet tablet:text-base tablet:leading-6 tablet:w-[26.8125rem]'>Frieren, after she and her companions defeat the Demon King and go back to their regular lives. Except Frieren is near-immortal, and the rest of the party is human.</p>
                    <p className='text-light-blue text-xs font-normal mb-[0.625rem] tablet:text-sm'>PG-13 - Teens 13 or older</p>

                    <div className='badge bg-accent rounded-full mr-[0.625rem]'>
                    <p className='text-darker-blue text-xs font-medium leading-4'>TV</p>
                    </div>
                    <div className='badge bg-accent rounded-full mr-[0.625rem]'>
                    <p className='text-darker-blue text-xs font-medium leading-4'>2023</p>
                    </div>
                    <div className='badge bg-accent rounded-full'>
                    <p className='text-darker-blue text-xs font-medium leading-4'>Finished Airing</p>
                    </div>
                </div>
                <button className='w-[6.625rem] h-[6.625rem] absolute right-0 btn bg-accent rounded-none rounded-bl-3xl rounded-tr-3xl tablet:w-40 tablet:h-40 tablet:bottom-0 tablet:rounded-tl-3xl tablet:rounded-tr-none tablet:rounded-bl-none tablet:rounded-br-3xl'>
                    <p className='text-sm text-dark-blue font-semibold'>See More</p>
                </button>
            </div>
        </div>
    )
}

export default FeaturedAnime