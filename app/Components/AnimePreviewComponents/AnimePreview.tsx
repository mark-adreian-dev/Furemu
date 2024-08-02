
import Image from "next/image"
import PreviewImage from "./AnimeDetailsComponents/PreviewImage"
import BasicInfo from "./AnimeDetailsComponents/BasicInfo"
import Theme from "./AnimeDetailsComponents/Theme"
import Characters from "./AnimeDetailsComponents/Characters"
// import Producers from "./AnimeDetailsComponents/Producers"
import Synopsis from "./AnimeDetailsComponents/Synopsis"
import MangaBackground from "./AnimeDetailsComponents/MangaBackground"
import MangaAuthors from "./AnimeDetailsComponents/MangaAuthors"
import dynamic from "next/dynamic"
import { Type } from "@/app/Types/Enums"
import { AnimeData } from "@/app/Types/Anime"
import { MangaData } from "@/app/Types/Manga"

const Producers = dynamic(() => import("./AnimeDetailsComponents/Producers"))

interface Props {
  data: AnimeData | MangaData,
  type: Type
}

const AnimePreview:React.FC<Props> = ({ data, type }) => {
  let previewData: AnimeData | MangaData = data
  
  return (
    <>
      <div className="main-content px-6 pt-32 flex flex-col items-center tablet:pt-36 tablet:px-16 desktop:flex-row desktop:items-start desktop:pt-36">
        <div className="fixed top-0 right-0 h-screen w-[39.875rem] poster-desktop-imgae wide:w-[55rem] ">
          <div className="relative h-screen w-[39.875rem]">
            <div className="absolute top-0 left-0 h-screen w-[39.875rem] hidden desktop:block wide:w-[55rem]">
              <Image src={previewData.images.jpg.large_image_url} alt="poster-image-desktop" fill sizes="(min-width: 780px) 584px, (min-width: 400px) 319px, 83.75vw" priority={true} className="object-cover"/>
            </div>
            <div className="absolute z-100 left-0 h-screen w-[39.875rem] bg-preview-overlay"></div>
          </div>
        </div>
        <PreviewImage data={previewData}/>
        <div className="anime-preview-scroll-wrapper relative w-full tablet:w-full desktop:w-[40.5rem] scrollbar-thin scrollbar-thumb-accent scrollbar-track-darker-blue wide:pl-16 wide:w-[44.5rem]">
          <h1 className="text-accent text-center text-3xl font-bold mb-32 tablet:mb-16 tablet:text-6xl  tablet:mx-auto desktop:text-start">{previewData.title_english ? previewData.title : previewData.title_english}</h1>
          <BasicInfo data={previewData} type={type}/>
          {
            type == Type.anime &&
            <div>
              <Theme data={(previewData as AnimeData).theme.openings} type="Openings"/>
              <Theme data={(previewData as AnimeData).theme.endings} type="Endings"/>
            </div> 
          }

          <Synopsis synopsis={previewData.synopsis} />
          <Characters id={previewData.mal_id} type={type}/>
          {type == Type.manga && <MangaAuthors mangaAuthors={(previewData as MangaData).authors}/>}
          {type == Type.anime && <Producers animeProducers={(previewData as AnimeData).producers}/>}
          {type == Type.manga && <MangaBackground background={(previewData as MangaData).background}/>}
        </div>
      </div>
    </>
  )
}

export default AnimePreview