import Image from "next/image"
import { AnimeData } from "@/app/Types/Anime"
import { MangaData } from "@/app/Types/Manga"

interface Props{
    data: AnimeData | MangaData
}

const PreviewImage:React.FC<Props> = ({ data }) => {
  return (
    <div className="poster-image relative w-full mobile:w-[19.9375rem] h-[28.375rem] rounded-3xl overflow-hidden mb-8 mx-auto tablet:h-[52rem] tablet:w-[36.5rem] tablet:mb-16 desktop:hidden">
        <Image src={data.images.jpg.large_image_url} alt="anime-poster" fill className="object-cover" sizes="(min-width: 1920px) 880px, 638px" priority={true} quality={100}/>
    </div>
  )
}

export default PreviewImage