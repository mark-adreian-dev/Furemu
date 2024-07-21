
import React from 'react'
import Header from '../../GlobalComponents/Header'
import Footer from '../../GlobalComponents/Footer'
import AnimePreview from './Components/AnimePreview'

const page = ({ params }: {params: {mal_id: string}}) => {
    const animeId = params.mal_id
    return (
        <>
            <Header />  
            <AnimePreview endPoint={String(`https://api.jikan.moe/v4/anime/${animeId}/full`)} />
            <Footer />
        </>
  )
}

export default page