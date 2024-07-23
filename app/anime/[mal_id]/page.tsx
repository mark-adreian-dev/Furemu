
import React from 'react'
import Header from '@/app/GlobalComponents/Header'
// import Footer from '@/app/GlobalComponents/Footer'
import AnimePreview from './Components/AnimePreview'
import { Anime } from '@/app/Types/Anime'

export const getAnimeData = async ( endPoint: string ): Promise<Anime> => {
    const response = await fetch(endPoint)  
    const result: Anime = await response.json()
    return result
  }
  

const page = async ({ params }: {params: {mal_id: string}}) => {
    const animeId = params.mal_id
    const result: Anime = await getAnimeData(String(`https://api.jikan.moe/v4/anime/${animeId}/full`))
    const animeData = result

    return (
        <>
            <Header />  
            <AnimePreview animeData={animeData}/>
            {/* <Footer /> */}
        </>
  )
}

export default page