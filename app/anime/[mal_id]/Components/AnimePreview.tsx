import Image from "next/image"
import BasicInfo from "./BasicInfo"
import Theme from "./Theme"
import Characters from "./Characters"
import Producers from "./Producers"
import { Anime } from "@/app/Types/Anime"
import PreviewImage from "./PreviewImage"
import Synopsis from "./Synopsis"

interface Props {
    endPoint: string
}

const GetAnimeData = async ( endPoint: string ): Promise<Anime> => {
  const response = await fetch(endPoint)  
  const result: Anime = await response.json()
  return result
}

const AnimePreview:React.FC<Props> = async ({ endPoint }) => {
  const data = (await GetAnimeData(endPoint)).data
 


  return (
    <div className="main-content px-6 mt-24 pt-8 flex flex-col items-center tablet:pt-16 tablet:px-16">
      <PreviewImage data={data}/>
      <div className="relative w-full tablet:w-full">
        <h1 className="text-accent text-center text-3xl font-bold mb-32 tablet:mb-16 tablet:text-6xl  tablet:mx-auto">{!data.title_english ? data.title : data.title_english}</h1>
        <BasicInfo data={data}/>
        <Theme data={data.theme.openings} type="Openings"/>
        <Theme data={data.theme.endings} type="Endings"/>
        <Synopsis synopsis={data.synopsis} />
      </div>
      <Characters id={data.mal_id}/>
      <Producers animeProducers={data.producers} />
    </div>
  )
}

export default AnimePreview