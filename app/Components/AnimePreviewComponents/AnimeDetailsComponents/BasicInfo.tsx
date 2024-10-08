import Badge from "../BasicInfoComponents/Badge"
import InfoRow from "../BasicInfoComponents/InfoRow"
import { AnimeData } from "@/app/Types/Anime"
import { Genre } from "@/app/Types/GlobalTypes"
import { Type } from "@/app/Types/Enums"
import { MangaData } from "@/app/Types/Manga"

interface BasicInfo {
  "Title": string,
  "Title English": string,
  "Title Japanese": string,
  "Rating" : string | number,
  "Type": string[],
  "Genre": string[]
}

interface Props {
  data: AnimeData | MangaData,
  type: Type
}

enum BasicInfoAttributes {
  
  TITLE = "Title",
  TITLE_ENGLISH = "Title English",
  TITLE_JAPANESE = "Title Japanese",
  RATING = "Rating",
  TYPE = "Type",
  GENRE = "Genre"

}

const BasicInfo:React.FC<Props> = ({ data, type }) => {
  let genreContainer:string[] = []
  let anime : AnimeData = data as AnimeData
  let manga : MangaData = data as MangaData
  
  data.genres.map((genre: Genre) => genreContainer.push(genre.name))

  const basicInfoAnime: BasicInfo = {
    "Title": !data.title ? data.title_english : data.title,
    "Title English": !data.title_english ? "N/A" : data.title_english,
    "Title Japanese": !data.title_japanese ? "N/A" : data.title_japanese,
    "Rating" : type == Type.manga ? manga.score : !anime.rating ? "N/A" : anime.rating ,
    "Type": type === Type.anime ? [data.type, data.status, (anime.episodes ? anime.episodes + " episodes" : "no episodes")] : [data.type, data.status],
    "Genre": genreContainer
  }

  return (
    <div className="anime-basic-info flex flex-col items-start mb-16 tablet:items-center desktop:items-start">
      {
        Object.entries(basicInfoAnime).map(([key, value], index) => {
            if(key === BasicInfoAttributes.GENRE && value.length === 0){
              return <div key={index} className="info-item flex mb-2">
              <p className="text-white text-sm leading-6 font-bold mr-4  desktop:block">{key}:</p>
              <p className="text-accent text-sm leading-6 font-normal">N/A</p>
            </div>
            }
            else if(key === BasicInfoAttributes.TYPE || key === BasicInfoAttributes.GENRE) {
              return <InfoRow key={index} text={key}>
                {value.map((item: string) => item !== null && <Badge key={item} text={item} />)}
              </InfoRow>  
            } 
            else{
              return <div key={index} className="info-item flex mb-2">
                <p className="text-white text-sm leading-6 font-bold mr-4 desktop:block">{key}:</p>
                <p className="text-accent text-sm leading-6 font-normal">{value}</p>
              </div>
            }
          }          
        )
      }
    </div>
  )
}

export default BasicInfo