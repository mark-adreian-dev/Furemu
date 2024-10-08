'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Breakpoints } from '@/app/Types/Enums';
import Image from "next/image"
import data from '@/FeaturedAnime.json'
import Link from "next/link";

interface ImagePath {
    "mobile": string
    "tablet": string
    "desktop": string,
}
interface FeaturedData {
    "mal_id": number,
    "images": ImagePath 
}

const featuredData: FeaturedData = data.data[0]
const featuredImage: ImagePath = featuredData.images

const FeaturedAnime = ({isContentLoaded, setIsContentClicked}: { isContentLoaded: boolean, setIsContentClicked: Dispatch<SetStateAction<boolean>> }) => {
    const [screenSize, setScreenSize] = useState<string>("desktop")

    const handleCardClick = () => {
        setIsContentClicked(true)
    }
    const updateScreenSize = () => {
      if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop")
      else if (window.innerWidth >= Breakpoints.TABLET)  setScreenSize("tablet")
      else setScreenSize("mobile") 
    }
  
    useEffect(() => {
      
        updateScreenSize()
        window.addEventListener('resize', () => updateScreenSize())
  
    },[])
    
    if(isContentLoaded){
        return (
            <div className='featured px-6 pb-16 relative tablet:px-8 desktop:px-16'>
                <div className={`overflow-hidden relative featured-image w-full h-[25.96875rem] rounded-3xl tablet:h-[42.25rem] desktop:h-[42.1875rem]`}>
                    <Image src={featuredImage[screenSize as keyof typeof featuredImage]} alt="featured-image" fill sizes="calc(97.04vw - 39px)" className="object-cover" quality={100} />
    
                    <div className='absolute left-6 bottom-6 z-100 context tablet:left-16 tablet:bottom-16'>
                        <h1 className='text-accent text-2xl font-bold w-48 leading-6 mb-4 tablet:text-6xl tablet:w-[29.625rem]'>Frieren: Beyond Journey’s End</h1>
                        <p className='text-white text-xs w-64 leading-4 font-normal mb-4 tablet tablet:text-base tablet:leading-6 tablet:w-[26.8125rem]'>Frieren, after she and her companions defeat the Demon King and go back to their regular lives. Except Frieren is near-immortal, and the rest of the party is human.</p>
                        <p className='text-light-blue text-xs font-normal mb-[0.625rem] tablet:text-sm'>PG-13 - Teens 13 or older</p>
    
                        <div className='border-none badge bg-accent rounded-full mr-[0.625rem]'>
                        <p className='text-darker-blue text-xs font-medium leading-4'>TV</p>
                        </div>
                        <div className='border-none badge bg-accent rounded-full mr-[0.625rem]'>
                        <p className='text-darker-blue text-xs font-medium leading-4'>2023</p>
                        </div>
                        <div className='border-none badge bg-accent rounded-full'>
                        <p className='text-darker-blue text-xs font-medium leading-4'>Finished Airing</p>
                        </div>
                    </div>
                    <div onClick={handleCardClick}>
                        <Link href={`anime/${featuredData.mal_id}`} scroll={false} >
                            <button className='w-[6.625rem] h-[6.625rem] border-none absolute right-0 bg-accent rounded-none rounded-bl-3xl rounded-tr-3xl tablet:w-40 tablet:h-40 tablet:bottom-0 tablet:rounded-tl-3xl tablet:rounded-tr-none tablet:rounded-bl-none tablet:rounded-br-3xl hover:bg-white btn'>
                                <p className='text-sm text-dark-blue font-semibold'>See More</p>
                            </button>
                        </Link>
                    </div>
                      
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
    
}

export default FeaturedAnime