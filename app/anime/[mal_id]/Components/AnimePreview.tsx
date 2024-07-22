import BasicInfo from "./BasicInfo"
import Theme from "./Theme"
import Characters from "./Characters"
import Producers from "./Producers"
import { Anime } from "@/app/Types/Anime"
import PreviewImage from "./PreviewImage"
import Synopsis from "./Synopsis"
import { getAnimeData } from "@/app/Fetch"

interface Props {
    endPoint: string
}

const AnimePreview:React.FC<Props> = async ({ endPoint }) => {
  const result: Anime = await getAnimeData(endPoint)
  const animeData = result
 
  return (
    <div className="main-content px-6 mt-24 pt-8 flex flex-col items-center tablet:pt-16 tablet:px-16">
      <PreviewImage data={animeData.data}/>
      <div className="relative w-full tablet:w-full">
        <h1 className="text-accent text-center text-3xl font-bold mb-32 tablet:mb-16 tablet:text-6xl  tablet:mx-auto">{!animeData.data.title_english ? animeData.data.title : animeData.data.title_english}</h1>
        <BasicInfo data={animeData.data}/>
        <Theme data={animeData.data.theme.openings} type="Openings"/>
        <Theme data={animeData.data.theme.endings} type="Endings"/>
        <Synopsis synopsis={animeData.data.synopsis} />
      </div>
      <Characters id={animeData.data.mal_id}/>
      <Producers animeProducers={animeData.data.producers} />
    </div>
  )
}

export default AnimePreview