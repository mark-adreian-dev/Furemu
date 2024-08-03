"use client"

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import TitleControl from './CardListComponents/TitleControl'
import Card from './CardListComponents/Card'
import { AnimeData, Batch } from '@/app/Types/BatchData'
import { FetchAnime } from '@/app/Utilities/FetchAnime'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'

interface Props {
  
  endpoint: string
  nextEl: string,
  prevEl: string,
  title: string,
  type: string,
  index: number,
  isContentLoaded: boolean
  setIsContentLoaded: Dispatch<SetStateAction<boolean>>

}

const CardList:React.FC<Props> = ({ endpoint, prevEl, nextEl, title, type, index, setIsContentLoaded, isContentLoaded}) => {
  const animeRef = useRef<any>();
  const [data, setData] = useState<AnimeData[]>([])

  useEffect(() => {
    const fetchDefaultData = () => {
      const getData = async () => {
        const animeData: Batch = await FetchAnime(endpoint, index)
        setData(animeData.data)
        setIsContentLoaded(true)
      }

      getData()
    }

    fetchDefaultData()
    
  },[endpoint, index, setIsContentLoaded])

  if(isContentLoaded) {
    return (
      <div className='featured-section py-8 px-6 tablet:px-8 tablet:py-16 desktop:px-16'>
          <TitleControl title={title} nextEl={nextEl} prevEl={prevEl}/>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: "." + nextEl,
              prevEl: "." + prevEl,
            }}
            slidesPerGroup={3}
            onSlideChange={() => {}}
            slidesPerView="auto"
            onSwiper={(swiper) => (animeRef.current = swiper)}
            initialSlide={0}
          >
            {
              data?.map((anime: AnimeData) => 
               <SwiperSlide key={anime.mal_id} className="mr-2">
                <Link key={anime.mal_id} href={`${type}/${anime.mal_id}`}>
                  <Card 
                    imageUrl={anime.images.jpg.image_url}
                    animeTitleEnglish={anime.title_english}
                    animeTitleJapanese={anime.title_japanese}
                    animeType={anime.type}
                    animeStatus={anime.status}
                    animeRating={anime.rating}
                 />
                </Link>
               </SwiperSlide>
              )
            }  
          </Swiper>
      </div>
    )
  } else {
    return <div></div>
  }
  
  
}

export default CardList