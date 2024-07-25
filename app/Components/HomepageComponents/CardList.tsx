import Link from 'next/link'
import TitleControl from './CardListComponents/TitleControl'
import CardCarousel from './CardListComponents/CardCarousel'
import Card from './CardListComponents/Card'
import { TopAnimeData, TopAnime, Pagination } from '@/app/Types/TopAnime'
import { FetchAnime } from '@/app/Utilities/FetchAnime'

interface Props {
  
  endpoint: string
  nextEl: string,
  prevEl: string,
  title: string,
  type: string,
  index: number

}

const CardList:React.FC<Props> = async ({ endpoint, prevEl, nextEl, title, type, index}) => {
  const animeData: TopAnime = await FetchAnime(endpoint, index)
  const data: TopAnimeData[] = animeData.data
  const animePagination: Pagination = animeData.pagination
  
  return (
    <div className='featured-section py-8 px-6 tablet:px-8 tablet:py-16 desktop:px-16'>
        <TitleControl title={title} nextEl={nextEl} prevEl={prevEl}/>
        <CardCarousel nextEl={nextEl} prevEl={prevEl} >
          {
            data.map((anime: TopAnimeData) => 
              <a key={anime.mal_id} href={`${type}/${anime.mal_id}`}>
                <Card 
                  imageUrl={anime.images.jpg.large_image_url}
                  animeTitleEnglish={anime.title_english}
                  animeTitleJapanese={anime.title_japanese}
                  animeType={anime.type}
                  animeStatus={anime.status}
                  animeRating={anime.rating}
               />
              </a>
            )
          }  
        </CardCarousel>
    </div>
  )
}

export default CardList