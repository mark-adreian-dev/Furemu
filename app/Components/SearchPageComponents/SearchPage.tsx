"use client";

import Image from "next/image";
import banner from "@/HeroBannerData.json";
import InputBox from "@/app/Components/SearchPageComponents/InputBox";
import FilterCategory from "@/app/Components/SearchPageComponents/FilterCategory";
import GenreFilter from "@/app/Components/SearchPageComponents/GenreFilter";
import FilterBadge from "@/app/Components/SearchPageComponents/FilterBadge";
import SearchCard from "@/app/Components/SearchPageComponents/SearchCard";
import PaginationControl from "@/app/Components/SearchPageComponents/PaginationControl"
import { useState, useEffect, useContext, createContext, Dispatch, SetStateAction, useRef } from "react";
import { FetchAnime, Params, Rating } from "@/app/Utilities/FetchAnime";
import { AnimeData, Batch, Pagination } from "@/app/Types/BatchData";
import { SearchType } from "@/app/Utilities/FetchAnime";
import { Breakpoints, Type } from "@/app/Types/Enums";
import { BannerSlide } from "@/app/Types/BannerType";
import { Filter } from "@/app/Types/GlobalTypes";
import { Genre, GenreData } from "@/app/Types/Genre";

const bannerData: BannerSlide[] = banner.data;

const animeTypeFilters: Filter[] = [
  {
    name: "TV",
    value: SearchType.TV,
  },
  {
    name: "Movie",
    value: SearchType.MOVIE,
  },
  {
    name: "OVA",
    value: SearchType.OVA,
  },
  {
    name: "Special",
    value: SearchType.SPECIAL,
  },
  {
    name: "TV Special",
    value: SearchType.TV_SPECIAL,
  },
];
const ratingFilters: Filter[] = [
  {
    name: "G - All Ages",
    value: Rating.ALL_AGES,
  },
  {
    name: "PG - Children",
    value: Rating.CHIDLREN,
  },
  {
    name: "PG-13 - Teens",
    value: Rating.TEENS,
  },
  {
    name: "R - 17+ violence",
    value: Rating.VIOLENCE_PROFANITY,
  },
  {
    name: "R+ - Mild Nudity",
    value: Rating.NUDITY,
  },
  {
    name: "Rx - Hentai",
    value: Rating.HENTAI,
  },
];
const mangaTypeFilters: Filter[] = [
  {
    name: "Manga",
    value: "manga"
  },
  {
    name: "Novel",
    value: "novel"
  },
  {
    name: "Light Novel",
    value: "lightnovel"
  },
  {
    name: "One Shot",
    value: "oneshot"
  },
  {
    name: "Doujin",
    value: "doujin"
  },
  {
    name: "Manhwa",
    value: "Manhwa"
  },
  {
    name: "Manhua",
    value: "Manhua"
  }
]
const mangaStatusFilters: Filter[] = [
  {
    name: "Publishing",
    value: "publishing"
  },
  {
    name: "Complete",
    value: "complete"
  },
  {
    name: "Hiatus",
    value: "hiatus"
  },
  {
    name: "Discontinued",
    value: "discontinued"
  },
  {
    name: "Upcoming",
    value: "upcoming"
  },
]
export interface Context {
  setType: Dispatch<SetStateAction<string>>,
  setRating: Dispatch<SetStateAction<Rating>>,
  setGenre: Dispatch<SetStateAction<string>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setMangaStatus: Dispatch<SetStateAction<string>>
  setPageCount: Dispatch<SetStateAction<number>>
  ratingFilters: Filter[]
  animeTypeFilters: Filter[],
  mangaTypeFilters: Filter[],
  genre: string,
  mangaStatus : string,
  pageCount: number
  
}
export const FilterContext = createContext<Context>({
  setType: () => {},
  setRating: () => {},
  setGenre: () => {},
  setIsLoading: () => {},
  setMangaStatus: () => {},
  setPageCount: () => {},
  ratingFilters,
  animeTypeFilters,
  mangaTypeFilters,
  genre: "",
  mangaStatus: "",
  pageCount: 1
})
export const useGlobalContext = () => useContext(FilterContext)
interface Props {
  params: string
}

const paginationDefaultValue = {
  current_page: 1,
  has_next_page: false,
  items: {
    count: 0,
    total: 0,
    per_page: 0,
  },
  last_visible_page: 0,
}

const SearchPage:React.FC<Props> = ({ params }) => {
  const controllerRef = useRef<AbortController>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<string>();
  const [genreFilters, setGenreFilters] = useState<GenreData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [rating, setRating] = useState<Rating>(Rating.NO_RATING);
  const [genre, setGenre] = useState<string>("");
  const [mangaStatus, setMangaStatus] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(1);
  const [data, setData] = useState<AnimeData[]>([]);
  const [paginationData, setPaginationData] = useState<Pagination>(paginationDefaultValue);
  
  const resetFitler = () => {
    setRating(Rating.NO_RATING);
    setType("");
    setQuery("");
    setGenre("");
  };

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth <= 1366) resetFitler();
      if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop");
      else if (window.innerWidth >= Breakpoints.TABLET) setScreenSize("tablet");
      else setScreenSize("mobile");
    };
  
    const fetchGenre = async (animeType: string) => {
      const response: Genre | null = await FetchAnime(`/genres/${animeType}`,);
      if((response as Genre)) setGenreFilters((response as Genre).data);    
    };
    
    updateScreenSize();
    window.addEventListener("resize", () => updateScreenSize());
    fetchGenre(params);
  }, [params]);

  useEffect(() => {
    const fetchSearchData = (delayRate: number) => {
      const parameters: Params = {page: pageCount};
  
      //If filter is present add filter as parameters to the request
      if (query !== "") parameters.q = query;
      if (rating != Rating.NO_RATING) parameters.rating = rating;
      if (type != "") parameters.type = type;
      if (genre != "") parameters.genres = genre;
      if (mangaStatus != "") parameters.status = mangaStatus;
  
      controllerRef.current = new AbortController();
      const signal = controllerRef.current.signal;
  
      const fetchdata = async () => {
        const response: Batch | null = await FetchAnime(
          `/${params}`,
          delayRate,
          parameters,
          signal
        );
  
        if((response as Batch)) {
          setPaginationData((response as Batch).pagination);
          setData((response as Batch).data);
          setIsLoading(false);
        } else {
          setPaginationData(paginationDefaultValue)
          setData([])
        }
      };
      fetchdata();
    };

    fetchSearchData(1)
  }, [query, mangaStatus, pageCount, rating, type, genre, params]);
  
  return (
    <div className="relative z-0 h-fit">
      <div className="absolute z-0 background-image w-full h-[43.8125rem] bg-darker-blue">
        <Image
          src={
            screenSize === "mobile"
              ? bannerData[4].imagePathMobile
              : screenSize === "tablet"
              ? bannerData[4].imagePathTablet
              : bannerData[4].imagePathDesktop
          }
          alt="background-image"
          fill
          sizes="100%"
          className="object-cover object-bottom"
          draggable={false}
          priority={true}
          quality={100}
        />
      </div>
      <FilterContext.Provider
        value={{
          setType,
          setRating,
          setGenre,
          genre,
          ratingFilters,
          animeTypeFilters,
 
          setIsLoading,
          setMangaStatus,
          mangaStatus,
          mangaTypeFilters,
          setPageCount,
          pageCount
        }}
      >
        <div className="content relative z-20 w-full pt-24 px-6 tablet:px-8 tablet:pt-[8.25rem] desktop:flex desktop:px-16 desktop:pt-[10.25rem]">
          <div className="left hidden desktop:block w-[12.8125rem] mr-6">
            {params === Type.anime && (<FilterCategory title="Type" items={animeTypeFilters} />)}
            {params === Type.anime && (<FilterCategory title="Rating" items={ratingFilters} />)}
            {params === Type.manga && (<FilterCategory title="Type" items={mangaTypeFilters} />)}
            {params === Type.manga && (<FilterCategory title="Status" items={mangaStatusFilters} />)}
            <GenreFilter items={genreFilters} />
          </div>
          <div className="right w-full relative">
            <InputBox
              type={params}
              value={query}
              setValue={setQuery}
              controller={controllerRef}
            />
            <FilterBadge
              genreActiveFilter={genre}
              genreFilter={genreFilters}
              mangaFilter={mangaStatusFilters}
              resultLength={paginationData ? paginationData.items.total : 0}
              rating={rating}
              type={type}
            />
            <SearchCard data={data} isLoading={isLoading} type={params} />
            <PaginationControl paginationData={paginationData} isLoading={isLoading}/>
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  );
};

export default SearchPage;
