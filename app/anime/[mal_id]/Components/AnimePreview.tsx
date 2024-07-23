import Image from "next/image"
import { Anime } from "@/app/Types/Anime"
import PreviewImage from "./AnimeDetailsComponents/PreviewImage"
import SmoothScroll from "@/app/GlobalComponents/SmoothScroll"
import BasicInfo from "./AnimeDetailsComponents/BasicInfo"
import Theme from "./AnimeDetailsComponents/Theme"
import Characters from "./AnimeDetailsComponents/Characters"
import Producers from "./AnimeDetailsComponents/Producers"
import Synopsis from "./AnimeDetailsComponents/Synopsis"
interface Props {
    animeData: Anime ,
}



const AnimePreview:React.FC<Props> = ({ animeData }) => {
  return (
    <div className="main-content px-6 mt-24 pt-8 flex flex-col items-center tablet:pt-16 tablet:px-16 desktop:flex-row desktop:items-start desktop:mt-0">
      <div className="fixed top-0 right-0 h-screen w-[39.875rem] poster-desktop-imgae wide:w-[55rem] ">
        <div className="relative h-screen w-[39.875rem]">
          <div className="absolute top-0 left-0 h-screen w-[39.875rem] hidden desktop:block wide:w-[55rem]">
            <Image src={animeData.data.images.jpg.large_image_url} alt="poster-image-desktop" fill sizes="100%" priority={true} quality={100} className="object-cover"/>
          </div>
          <div className="absolute z-100 left-0 h-screen w-[39.875rem] bg-preview-overlay"></div>
        </div>
      </div>
      <PreviewImage data={animeData.data}/>
      <SmoothScroll root={false}>
          <div className="anime-preview-scroll-wrapper relative w-full tablet:w-full desktop:w-[40.5rem] desktop:overflow-x-hidden scrollbar-thin scrollbar-thumb-accent scrollbar-track-darker-blue wide:pl-16 wide:w-[44.5rem]">
            <h1 className="text-accent text-center text-3xl font-bold mb-32 tablet:mb-16 tablet:text-6xl  tablet:mx-auto desktop:text-start">{!animeData.data.title_english ? animeData.data.title : animeData.data.title_english}</h1>
            <BasicInfo data={animeData.data}/>
            <Theme data={animeData.data.theme.openings} type="Openings"/>
            <Theme data={animeData.data.theme.endings} type="Endings"/>
            <Synopsis synopsis={animeData.data.synopsis} />
            <Characters id={animeData.data.mal_id} />
            <Producers animeProducers={animeData.data.producers} />
          </div>
      </SmoothScroll>
    </div>
  )
}

export default AnimePreview