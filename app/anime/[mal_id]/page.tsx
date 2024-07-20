
import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AnimePreview from './Components/AnimePreview'

const page = ({ params }: {params: {mal_id: string}}) => {
    const animeId = params.mal_id
    return (
        <>
            <Header />  
            <AnimePreview endPoint={`https://api.jikan.moe/v4/anime/${animeId}/full`} />
            <Footer />
        </>
  )
}

export default page