import { AnimeData } from "@/app/Types/BatchData";
import { MangaData } from "@/app/Types/Manga";
import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ data, isLoading, type }: { data: AnimeData[] | MangaData[], isLoading: boolean, type: string }) => {
    if(isLoading) {
        return(
            <div className="h-[calc(100vh-18rem)] flex justify-center items-center">
                <span className="w-32 h-32 loading loading-ring"></span>
            </div>
        )
    }

    else if (data.length !== 0) {
      return (
        <div className="card-container grid grid-cols-4 gap-x-2 gap-y-6 tablet:gap-y-16 tablet:gap-x-4 mt-8 desktop:grid-cols-5 mb-16">
          {data.map((item) => (
            <Link key={item.mal_id} href={`/${type}/${item.mal_id}`} scroll={false}>
              <div >
                <div className="relative rounded-md overflow-hidden h-[calc(((100vw-3rem-1.5rem)/4)*1.406249338397503)] tablet:h-[calc(((100vw-3rem-3rem)/4)*1.406249338397503)] tablet:rounded-2xl desktop:tablet:h-[calc(((100vw-3rem-3rem)/6)*1.406248585365854)] desktop:rounded-3xl ">
                  <Image
                    src={item.images.jpg.large_image_url}
                    fill
                    alt="poster-image"
                    sizes="100%"
                    className="object-fit"
                    priority={true}
                    quality={100}
                  />
                </div>
                <h4 className="text-white font-semibold font-main text-[0.75rem] mt-[0.34rem] tablet:text-sm tablet:mt-[0.73rem] desktop:text-[1.02956rem]">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      );
  } else {
    return (
      <div className="h-[calc(100vh-18rem)] flex justify-center items-center">
        <h1 className="text-6xl text-center text-white font-black">No results Found</h1>
      </div>
    );
  }
};

export default SearchCard;
