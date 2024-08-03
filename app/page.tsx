"use client"

import { useState } from 'react';
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer';
import Banner from '@/app/Components/HomepageComponents/Banner'
import CardList from '@/app/Components/HomepageComponents/CardList'
import FeaturedAnime from '@/app/Components/HomepageComponents/FeaturedAnime';
import SmoothScroll from './Components/SmoothScroll';

interface EndpointDetails {
  endpoint: string,
  nextEl: string,
  prevEl: string,
  title: string,
  type: string
}
interface Endpoints {
  latestAnime:  EndpointDetails,
  topAnime: EndpointDetails,
  featuredAnime: null,
  upcomingAnime: EndpointDetails,
  topManga: EndpointDetails,
}


const endpoints: Endpoints = {
  latestAnime: {
    endpoint: "/seasons/now",
    nextEl: "next-seasom-anime",
    prevEl: "prev-season-anime",
    title: "Latest Anime",
    type: "anime"
  },
  topAnime: {
    endpoint: "/top/anime",
    nextEl: "next-top-anime",
    prevEl: "prev-top-anime",
    title: "Top Anime",
    type: "anime"
  },
  featuredAnime: null,
  upcomingAnime: {
    endpoint: "/seasons/upcoming",
    nextEl: "next-upcoming-anime",
    prevEl: "prev-upcoming-anime",
    title: "Upcoming Anime",
    type: "anime"
  },
  topManga: {
    endpoint: "/top/manga",
    nextEl: "next-top-manga",
    prevEl: "prev-top-manga",
    title: "Top Manga",
    type: "manga"
  }
}

interface Props {

}

const Home:React.FC<Props> = () => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false)

  return (
    <>
    
      <SmoothScroll root={true}> 
        <Header active='home'/>
        <Banner/>
        <div>
          {
            !isContentLoaded && <div className="w-full flex justify-center items-start mt-16 pb-96">
              {/* <span className="block w-32 h-32 loading loading-ring"></span> */}
              <span className="loading loading-dots loading-lg"></span>
            </div>
          }
          {
            Object.entries(endpoints).map(([key, value], index) => {
              if (key !== "featuredAnime") {
                return <CardList key={index} isContentLoaded={isContentLoaded} setIsContentLoaded={setIsContentLoaded} endpoint={value.endpoint} prevEl={value.prevEl} nextEl={value.nextEl} title={value.title} type={value.type} index={index}/>
                
              } else {
                return <FeaturedAnime key={index} isContentLoaded={isContentLoaded} setIsContentLoaded={setIsContentLoaded}/>
              }
            })
          }
        </div>  
      </SmoothScroll>
      <Footer/>
    </>
  );
}

export default Home