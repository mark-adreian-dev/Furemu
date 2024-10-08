import { SetStateAction,  Dispatch  } from "react";
import { AnimeData } from "@/app/Types/BatchData";
import { MangaData } from "@/app/Types/Manga";
import Image from "next/image";
import Link from "next/link";


interface Props {
  data: AnimeData[] | MangaData[], 
  isLoading: boolean, 
  type: string,
  setIsContentClicked: Dispatch<SetStateAction<boolean>>
}

const SearchCard:React.FC<Props> = ({ data, isLoading, type, setIsContentClicked }) => {

  const handleCardClick = () => {
    setIsContentClicked(true)
  }

  if(isLoading) {
    return(
      <div className="h-[calc(100vh-18rem)] flex flex-col justify-center items-center">
        <span className="w-32 h-32 loading loading-ring mb-2 block bg-white"></span>
        <p className="text-white italic">Searching results...</p>
      </div>
    )
  }
  
  else if(data.length !== 0) {
    return (
      <div className="card-container grid grid-cols-2 gap-x-2 gap-y-6 tablet:grid-cols-3 tablet:gap-y-8 tablet:gap-x-4 mt-8 desktop:grid-cols-5 mb-16">
        {
          data.map((item) => (
            <div key={`${Math.floor(Math.random() * 100)}${item.mal_id}`} onClick={handleCardClick}>
              <Link  href={`/${type}/${item.mal_id}`}>
                <div >
                  <div className="relative rounded-md overflow-hidden h-[calc(((100vw-3rem-0.5rem)/2)*1.406249338397503)] tablet:h-[calc(((100vw-3rem-2rem)/3)*1.406249338397503)] tablet:rounded-2xl desktop:tablet:h-[calc((((100vw-8rem-14.3125rem)-3rem-4rem)/5)*1.406248585365854)] desktop:rounded-3xl ">
                    <Image
                      src={`${item.images.webp.large_image_url}`}
                      fill
                      alt="poster-image"
                      sizes="100%"
                      className="object-cover"
                      priority={true}
                      quality={100}
                      draggable={false}
                    />
                  </div>
                  <h4 className="text-white font-semibold font-main text-base mt-4 tablet:text-xl tablet:mt-[0.73rem] desktop">
                    {item.title}
                  </h4>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
  else {
    return (
      <div className="h-[calc(100vh-18rem)] flex flex-col justify-center items-center">
        <p className="text-white italic">No matches found...</p>
      </div>
    );
  }
  
};

export default SearchCard;
