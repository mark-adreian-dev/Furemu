import React from 'react'
import ProducerImage from './ProducerImage'


interface Producer {
    mal_id: number,
    type: string,
    name: string,
    url: string
}

interface ImageUrl{
    image_url: string
}

interface Images {
  jpg: ImageUrl,
}

interface Title{
    type: string,
    title: string
}


interface ProdResult {
    mal_id: number,
    name: string,
    url: string,
    titles: Title[],
    images: Images,
    favorites: number,
    established: Date,
    about: string,
    count: number
}



const Producers = async ({ animeProducers }: { animeProducers: any}) => {
    return (
        <div className='producers pb-16 mb-8'>
            <p className="text-start text-white text-sm leading-6 font-bold mb-8">Producers:</p>
            <div className="images grid grid-cols-3 gap-2 w-full h-fit relative">

            {
                animeProducers.map((item: Producer) => <ProducerImage key={item.mal_id} prodId={item.mal_id}/>)  
                
            }
            </div>
        </div>
    )
}

export default Producers