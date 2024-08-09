"use client";
import { useEffect, useRef, useState } from "react";
import { AnimeData, Batch } from "../Types/BatchData";
import { Params } from "../Utilities/FetchAnime";
import { FetchAnime } from "../Utilities/FetchAnime";
import Image from "next/image";
import IconButton from "./IconButton";
import Link from "next/link";

interface Props {
  page?: string;
}

const DesktopSearch: React.FC<Props> = ({ page }) => {
  const controllerRef = useRef<AbortController>();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false)
  const [query, setQuery] = useState<string>("");
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [data, setData] = useState<AnimeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    if (e.target.value === "") setQuery("");
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    setData([]);
    setQuery(e.target.value);
  };
  const toggleSearchBar = () => {
    setIsSearchFocused(!isSearchFocused)
    setIsSearchVisible(!isSearchVisible);
  };

  const clearSearch = () => {
    setQuery("");
  };

  useEffect(() => {
    const fetchSearchData = (delayRate: number) => {
      if (query === "") {
        setData([]);
        setIsLoading(false);
      } else {
        const parameters: Params = {
          page: 1,
          limit: 5,
          q: query,   
        };

        //If filter is present add filter as parameters to the request
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const fetchdata = async () => {
          const response: Batch = await FetchAnime(
            `/anime`,
            delayRate,
            parameters,
            signal
          );

          if (response as Batch) {
            setData((response as Batch).data);
            setIsLoading(false);
          }
        };
        fetchdata();
      }
    };

    fetchSearchData(1);
  }, [query]);

  return (
    <div className="relative hidden desktop:block">
      <div
        className={`absolute -left-[25rem] ${
          isSearchVisible ? "w-96" : "w-0"
        } transition-[width] ease-in-out duration-500 origin-left overflow-hidden desktop:flex desktop:justify-between desktop:items-center`}
      >
        <div className="flex items-center bg-transparent border-2 border-accent w-full rounded-lg overflow-hidden">
          <input
            type="text"
            className="pl-4 mr-2 bg-transparent text-white w-full h-[calc(3rem-4px)] outline-none"
            placeholder="Search anime here..."
            value={query}
            onChange={handleChange}
          />

          <div
            className={`relative w-4 h-4 cursor-pointer mr-4 ${
              query === "" ? "hidden" : "block"
            }`}
            onClick={clearSearch}
          >
            <Image
              src={"/icons/clear_text_icon.svg"}
              alt="clear-icon"
              fill
              className="object-contain"
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div
        className={`w-96 h-fit rounded-lg bg-dark-blue absolute top-16 -left-[25rem] left transition-[height] pt-4 ${
          query === "" ? "hidden" : "block"
        }`}
      >
        <p
          className={`text-base italic text-accent px-4 ${
            query !== "" ? "block" : "hidden"
          } ${!isLoading && data.length === 0 ? "mb-4": ""}`}
        >
           {`${!isLoading && data.length === 0 ? `No result found for "${query}"` : !isLoading ? `Results for "${query}"` : `Searching for "${query}"`}`}
        </p>

        
        {isLoading ? <LoadingUI/> : <SearchEntries data={data} query={query}/>}
      </div>
      <IconButton
        iconPath={isSearchVisible ? "/icons/close_icon.svg": "/icons/search_icon.svg"}
        className={`w-12 h-12 p-[0.875rem] hidden ${
          page === undefined ? "desktop:block" : ""
        } ${isSearchVisible ? "!bg-red-500": ""} transition-all duration-500 ease-in-out`}
        handleClick={toggleSearchBar}
      />
    </div>
  );
};

const LoadingUI = () => {
  return (
    <div className="px-4 w-full h-fit flex justify-start items-center py-6 mt-4">
      <span className="loading loading-ring loading-lg mr-4"></span>
      <p className="text-sm text-white italic font-main font-normal">Fecthing data...</p>
    </div>
  )
}

interface EntriesProps {
  data: AnimeData[],
  query: string
}
const SearchEntries:React.FC<EntriesProps> = ({data, query}) => {
  return (
    <>
      {
        data.map((item, index) => (
          <Link scroll={false} href={`/anime/${item.mal_id}`} key={item.mal_id}>
            <div key={item.mal_id} className={`p-4 flex items-center hover:bg-darker-blue ${index === 0 && "mt-4"}`}>
              <div className="w-[3.125rem] h-[4.625rem] relative rounded-md overflow-hidden mr-4">
                <Image
                  src={item.images.jpg.small_image_url}
                  alt="anime-poster"
                  fill
                  sizes="100%"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="w-[calc(384px-(50px+16px)] bg-transparent">
                <h2 className="card-title !mb-0 text-base text-white leading-4">
                  {item.title}
                </h2>
                <p className="italic text-xs text-wrap leading-6">Rating: {item.rating}</p>
              </div>
            </div>
          </Link>
        ))
      }
      <Link href={`/search/anime?query=${query}`}>
        <div className={`p-2 bg-accent w-full cursor-pointer rounded-b-lg border-none hover:bg-white transition-[background-color] duration-500 ease-in-out ${data.length === 0 ? "hidden" : "block"}`}>
          <p className="text-center text-xs font-main font-bold text-dark-blue">See More</p>
        </div>
      </Link>
    </>
  )
}

export default DesktopSearch;
