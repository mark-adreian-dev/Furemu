import Image from "next/image"

interface Props {
    endPoint: string
}

interface Genre {
  mal_id: number,
  type: string,
  name: string,
  url: string
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
  
  const basicInfo: BasicInfo = {
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
    <div className="main-content px-6 mt-24 pt-8 flex flex-col items-center">
      <h1 className="text-center text-accent text-3xl font-bold mb-8">{!data.title_english ? data.title : data.title_english}</h1>
      <div className="poster-image relative w-[19.9375rem] h-[28.375rem] rounded-3xl overflow-hidden mb-8">
        <Image src={data.images.jpg.large_image_url} alt="anime-poster" fill className="object-cover" sizes="100%"/>
      </div>
      <div className="anime-basic-info flex flex-col items-start">
        
          {
            Object.entries(basicInfo).map(
              (key) => 
                  String(key).split(",")[0] == "Type" ? 

                    <div key={String(key).split(",")[0]} className="info-item flex">
                      <p className="text-white text-sm leading-6 font-bold mr-4">{ String(key).split(",")[0]}:</p>
                      <div className="flex flex-wrap">
                        { 
                          String(key).split(",").map(items => items === "Type" ? null :
                            <div key={items} className="bg-accent rounded-full px-[0.625rem] mr-1 mb-2">
                              <p className="leading-6 text-sm text-dark-blue font-semibold">{items}</p>
                            </div>
                          )
                        }
                      </div>
                      
                    </div>
                  : 
                    <div key={String(key).split(",")[0]} className="info-item flex">
                      <p className="text-white text-sm leading-6 font-bold mr-4">{ String(key).split(",")[0]}:</p>
                      <p className="text-white text-sm leading-6 font-normal">{ String(key).split(",")[1]}</p>
                    </div>
            )
          }
       
        <div className="info-item flex">
          <p className="text-white text-sm leading-6 font-bold mr-4">Genres:</p>
          <div className="flex flex-wrap">
            {
              data.genres.map((genre: Genre) => 
              <div key={genre.mal_id} className="bg-accent rounded-full px-[0.625rem] mr-1 mb-2">
                <p className="leading-6 text-sm text-dark-blue font-semibold">{genre.name}</p>
              </div>)
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AnimePreview