import TitleControl from './CardListComponents/TitleControl'
import CardCarousel from './CardListComponents/CardCarousel'
import Link from 'next/link'
import { TopAnimeData, TopAnime, Pagination } from '@/app/Types/TopAnime'
import Card from './CardListComponents/Card'

interface Props {
  
  endpoint: string
  nextEl: string,
  prevEl: string,
  title: string,
  type: string

}
interface Params {
  page: number
}

const getTopAnimeData = async (endpoint: string, params: Params): Promise<TopAnime> => {
  const url = `${endpoint}?page=${params.page}`
  const response = await fetch(url, {method: 'GET'})
  const result : TopAnime = await response.json()
  return result
}

const CardList:React.FC<Props> = async ({ endpoint, prevEl, nextEl, title, type}) => {
  const animeData: TopAnime = await getTopAnimeData(endpoint, {page: 1})
  const data: TopAnimeData[] = animeData.data
  const animePagination: Pagination = animeData.pagination

  return (
    <div className='featured-section py-8 px-6 tablet:px-8 tablet:py-16 desktop:px-16'>
        <TitleControl title={title} nextEl={nextEl} prevEl={prevEl}/>
        <CardCarousel nextEl={nextEl} prevEl={prevEl} >
          {
            data.map((anime: TopAnimeData) => 
              <Link key={anime.mal_id} href={`${type}/${anime.mal_id}`} scroll={false}>
                <Card 
                  imageUrl={anime.images.jpg.large_image_url}
                  animeTitleEnglish={anime.title_english}
                  animeTitleJapanese={anime.title_japanese}
                  animeType={anime.type}
                  animeStatus={anime.status}
                  animeRating={anime.rating}
               />
              </Link>
            )
          }  
        </CardCarousel>
    </div>
  )
}

export default CardList