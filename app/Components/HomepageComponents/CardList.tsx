import TitleControl from './CardListComponents/TitleControl'
import CardCarousel from './CardListComponents/CardCarousel'
import Card from './CardListComponents/Card'
import { AnimeData, Batch } from '@/app/Types/BatchData'
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
  const animeData: Batch = await FetchAnime(endpoint, index)
  const data: AnimeData[] = (animeData as Batch).data
  
  return (
    <div className='featured-section py-8 px-6 tablet:px-8 tablet:py-16 desktop:px-16'>
        <TitleControl title={title} nextEl={nextEl} prevEl={prevEl}/>
        <CardCarousel nextEl={nextEl} prevEl={prevEl} >
          {
            data?.map((anime: AnimeData) => 
              <a key={anime.mal_id} href={`${type}/${anime.mal_id}`}>
                <Card 
                  imageUrl={anime.images.jpg.image_url}
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