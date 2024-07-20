import Image from "next/image"
import BasicInfo from "./BasicInfo"
import Theme from "./Theme"
import Characters from "./Characters"
import Producers from "./Producers"

interface Props {
    endPoint: string
}

interface BasicInfo {
  "Title": string,
  "Title English": string,
  "Title Japanese": string,
  "Rating" : string,
  "Type": string[],
}


const AnimePreview:React.FC<Props> = async ({ endPoint }) => {
  
  const response = await fetch(endPoint)  
  const result = await response.json()
  const data = result.data

 


  const basicInfoAnime: BasicInfo = {
    "Title": !data.title_english ? data.title : data.title_english,
    "Title English": !data.title_english ? "N/A" : data.title_english,
    "Title Japanese": !data.title_japanese ? "N/A" : data.title_japanese,
    "Rating" : !data.rating? "N/A" : data.rating,
    "Type":[
      data.type,
      data.status,
      data.episodes + " episodes"
    ],
  }

  return (
    <div className="main-content px-6 mt-24 pt-8 flex flex-col items-start">
      <div className="poster-image relative w-[19.9375rem] h-[28.375rem] rounded-3xl overflow-hidden mb-8 mx-auto">
        <Image src={data.images.jpg.large_image_url} alt="anime-poster" fill className="object-cover" sizes="100%" priority={true}/>
      </div>
      <h1 className=" text-accent text-3xl font-bold mb-8">{!data.title_english ? data.title : data.title_english}</h1>
      <BasicInfo data={data} basicInfo={basicInfoAnime}/>
      
      <Theme data={data.theme.openings} type="Openings"/>
      <Theme data={data.theme.endings} type="Endings"/>
     
      <div className="synopsis text-start mb-16">
        <p className=" text-white text-sm leading-6 font-bold mb-[0.875rem]">Synopsis:</p>
        <p className="text-light-blue text-sm leading-6 font-normal">{data.synopsis}</p>
      </div>
      <Characters id={data.mal_id}/>
      <Producers animeProducers={data.producers} />
    </div>
  )
}

export default AnimePreview