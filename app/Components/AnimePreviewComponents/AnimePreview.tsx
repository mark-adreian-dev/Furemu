import Image from "next/image"
import PreviewImage from "./AnimeDetailsComponents/PreviewImage"
import BasicInfo from "./AnimeDetailsComponents/BasicInfo"
import Theme from "./AnimeDetailsComponents/Theme"
import Characters from "./AnimeDetailsComponents/Characters"
import Producers from "./AnimeDetailsComponents/Producers"
import Synopsis from "./AnimeDetailsComponents/Synopsis"
import MangaBackground from "./AnimeDetailsComponents/MangaBackground"
import MangaAuthors from "./AnimeDetailsComponents/MangaAuthors"

import { Type } from "@/app/Types/Enums"
import { AnimeData } from "@/app/Types/Anime"
import { MangaData } from "@/app/Types/Manga"


interface Props {
  data: unknown,
  type: Type
}

const AnimePreview:React.FC<Props> = ({ data, type }) => {
  const anime = data as AnimeData
  const manga = data as MangaData
  return (
    <>
      <div className="main-content px-6 pt-32 flex flex-col items-center tablet:pt-36 tablet:px-16 desktop:flex-row desktop:items-start desktop:pt-36">
        <div className="fixed top-0 right-0 h-screen w-[39.875rem] poster-desktop-imgae wide:w-[55rem] ">
          <div className="relative h-screen w-[39.875rem]">
            <div className="absolute top-0 left-0 h-screen w-[39.875rem] hidden desktop:block wide:w-[55rem]">
              <Image src={anime.images.jpg.large_image_url} alt="poster-image-desktop" fill sizes="100%" priority={true} quality={100} className="object-cover"/>
            </div>
            <div className="absolute z-100 left-0 h-screen w-[39.875rem] bg-preview-overlay"></div>
          </div>
        </div>
        <PreviewImage data={type === Type.anime ? anime : manga}/>
        <div className="anime-preview-scroll-wrapper relative w-full tablet:w-full desktop:w-[40.5rem] scrollbar-thin scrollbar-thumb-accent scrollbar-track-darker-blue wide:pl-16 wide:w-[44.5rem]">
          <h1 className="text-accent text-center text-3xl font-bold mb-32 tablet:mb-16 tablet:text-6xl  tablet:mx-auto desktop:text-start">{type === Type.anime ? (!anime.title_english ? anime.title : anime.title_english) : (!manga.title_english ? manga.title : manga.title_english)}</h1>
          <BasicInfo data={type === Type.anime ? anime : manga} type={type}/>
          {
            type == Type.anime &&
            <div>
              <Theme data={anime.theme.openings} type="Openings"/>
              <Theme data={anime.theme.endings} type="Endings"/>
            </div> 
          }

          <Synopsis synopsis={type === Type.anime ? anime.synopsis : manga.synopsis} />
          <Characters id={type === Type.anime ? anime.mal_id : manga.mal_id} type={type}/>
          {type == Type.manga && <MangaAuthors mangaAuthors={manga.authors}/>}
          {type == Type.anime && <Producers animeProducers={anime.producers}/>}
          {type == Type.manga && <MangaBackground background={manga.background}/>}
         
        </div>
      </div>
    </>
  )
}

export default AnimePreview