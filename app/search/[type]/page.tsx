"use client";

import Header from "@/app/Components/Header";
import Image from "next/image";
import data from "@/HeroBannerData.json";
import InputBox from "@/app/Components/SearchPageComponents/InputBox";
import FilterCategory from "@/app/Components/SearchPageComponents/FilterCategory";
import GenreFilter from "@/app/Components/SearchPageComponents/GenreFilter";

import { useState, useEffect, useContext, useReducer, createContext, Dispatch, SetStateAction } from "react";
import { extractParams, FetchAnime, Params, Rating } from "@/app/Utilities/FetchAnime";
import { Batch } from "@/app/Types/BatchData";
import { SearchType } from "@/app/Utilities/FetchAnime";
import { Breakpoints } from "@/app/Types/Enums";
import { BannerSlide } from "@/app/Types/BannerType";
import { Filter } from "@/app/Types/GlobalTypes";
import { Genre, GenreData } from "@/app/Types/Genre";
import FilterBadge from "@/app/Components/SearchPageComponents/FilterBadge";

const bannerData: BannerSlide[] = data.data;
const typeFilters: Filter[] = [
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

export interface Context {
  setType: Dispatch<SetStateAction<string>>,
  setRating: Dispatch<SetStateAction<Rating>>,
  setGenre: Dispatch<SetStateAction<string>>,
  genre: string | number,
  ratingFilters: Filter[]
  typeFilters: Filter[]
}
export const FilterContext = createContext<Context>({
  setType: () => {},
  setRating: () => {},
  setGenre: () => {},
  genre: "",
  ratingFilters,
  typeFilters
})

export const useGlobalContext = () => useContext(FilterContext)

const page = ({ params }: { params: { type: string } }) => {
  const [screenSize, setScreenSize] = useState<string>();
  const [genreFilters, setGenreFilters] = useState<GenreData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [rating, setRating] = useState<Rating>(Rating.NO_RATING);
  const [genre, setGenre] = useState<string>("")
  const [pageCount, setPageCount] = useState<number>(1)
  const [parameters, setParameters] = useState<Params>({
    q: query,
    type: type,
    rating: rating,
    genre: genre,
    page: pageCount
  });

  const [data, setData] = useState<Batch>();
 

  const updateScreenSize = () => {
    if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop");
    else if (window.innerWidth >= Breakpoints.TABLET) setScreenSize("tablet");
    else setScreenSize("mobile");
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", () => updateScreenSize());

    const fetchGenre = async () => {
      const response: Genre = await FetchAnime(`/genres/${params.type}`);
      setGenreFilters(response.data);

    };

    fetchGenre();
  }, []);

  useEffect(() => {

    const parameters: Params = {
      page: pageCount
    }

    if (query !== "") parameters.q = query
    if (rating != Rating.NO_RATING) parameters.rating = rating
    if (type != "") parameters.type = type
    if (genre != "") parameters.genre = genre
  

    let requestUrl = "https://api.jikan.moe/v4/anime"
    const paramsExtracted = extractParams(parameters)

    console.log(paramsExtracted)

    // const fetchdata = async () => {
    //   const response: Batch = await FetchAnime(endpoint, 0, parameters);
    //   setData(response);
    // };


    // fetchdata();
  }, [query, pageCount, rating, type, genre]);

  return (
    <>
      <Header active={params.type} page="search" />
      <div className="relative z-0">
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
            typeFilters
          }}
        >
          <div className="content relative z-20 w-full top-24 px-6 tablet:px-8 tablet:top-[8.25rem] desktop:flex desktop:px-16 desktop:top-[10.25rem]">
            <div className="left hidden desktop:block w-[12.8125rem] mr-6">
              <GenreFilter items={genreFilters}/>
              <FilterCategory title="Type" items={typeFilters} />
              <FilterCategory title="Rating" items={ratingFilters} />
              
            </div>
            <div className="right w-full relative">
              <InputBox type={params.type} value={query} setValue={setQuery} />
              <FilterBadge genreActiveFilter={genre} genreFilter={genreFilters} resultLength={200} rating={rating} type={type}/>
            </div>
          </div>
        </FilterContext.Provider>
       
      </div>
    </>
  );
};

export default page;
