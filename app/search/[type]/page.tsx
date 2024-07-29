"use client";

import Header from "@/app/Components/Header";
import Image from "next/image";
import data from "@/HeroBannerData.json";
import InputBox from "@/app/Components/SearchPageComponents/InputBox";
import FilterCategory from "@/app/Components/SearchPageComponents/FilterCategory";
import { useState, useEffect } from "react";
import { FetchAnime, Params } from "@/app/Utilities/FetchAnime";
import { Batch, AnimeData } from "@/app/Types/BatchData";
import { SearchType } from "@/app/Utilities/FetchAnime";
import { Rating } from "@/app/Utilities/FetchAnime";
import { Breakpoints } from "@/app/Types/Enums";
import { BannerSlide } from "@/app/Types/BannerType";
import { Filter } from "@/app/Types/GlobalTypes";
import { Genre, GenreData } from "@/app/Types/Genre";
import GenreFilter from "@/app/Components/SearchPageComponents/GenreFilter";

const bannerData: BannerSlide[] = data.data;



const typeFilters: Filter[] = [
  {
    name: "TV",
    value: SearchType.TV
  },
  {
    name: "Movie",
    value: SearchType.MOVIE
  },
  {
    name: "OVA",
    value: SearchType.OVA
  },
  {
    name: "Special",
    value: SearchType.SPECIAL
  },
  {
    name: "TV Special",
    value: SearchType.TV_SPECIAL
  },
]

const ratingFilters: Filter[] = [
  {
    name: "G - All Ages",
    value: Rating.ALL_AGES
  },
  {
    name: "PG - Children",
    value: Rating.CHIDLREN
  },
  {
    name: "PG-13 - Teens",
    value: Rating.TEENS
  },
  {
    name: "R - 17+ violence",
    value: Rating.VIOLENCE_PROFANITY
  },
  {
    name: "R+ - Mild Nudity",
    value: Rating.NUDITY
  },
  {
    name: "Rx - Hentai",
    value: Rating.HENTAI
  }
]

const page = ({ params }: { params: { type: string } }) => {
  const [genreFilters, setGenreFilters] = useState<GenreData[] | undefined>()

  const [query, setQuery] = useState<string>("");
  const [parameters, setParameters] = useState<Params>();
  const [pageCount, setPageCount] = useState<number>(1);
  const [endpoint, setEndpoint] = useState<string>(`/${params.type}`);
  const [data, setData] = useState<Batch>();
  const [randomBgIndex, setRandomBgIndex] = useState<number>(4);
  const [screenSize, setScreenSize] = useState<string>();

  const updateScreenSize = () => {
    if (window.innerWidth >= Breakpoints.DESKTOP) setScreenSize("desktop");
    else if (window.innerWidth >= Breakpoints.TABLET) setScreenSize("tablet");
    else setScreenSize("mobile");
  };

  useEffect(() => {
    setRandomBgIndex(Math.floor(Math.random() * bannerData.length));
    updateScreenSize();
    window.addEventListener("resize", () => updateScreenSize());

    const fetchGenre = async () => {
      const response: Genre = await FetchAnime(`/genres/${params.type}`);
      console.log(response.data.length)
      setGenreFilters(response.data);
    };

    fetchGenre()
  }, []);

  useEffect(() => {
    
    const fetchdata = async () => {
      const response: Batch = await FetchAnime(endpoint, 0, parameters);
      setData(response);
    };

    // fetchdata();
  }, [pageCount, parameters, query]);

  return (
    <>
      <Header active={params.type} />
      <div className="relative w-screen z-0">
        <div className="absolute z-0 background-image w-screen h-[43.8125rem] bg-darker-blue">
          <Image
            src={
              screenSize === "mobile"
                ? bannerData[randomBgIndex].imagePathMobile
                : screenSize === "tablet"
                ? bannerData[randomBgIndex].imagePathTablet
                : bannerData[randomBgIndex].imagePathDesktop
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

        <div className="content relative z-20 w-screen top-24 px-6 tablet:px-8 tablet:top-[8.25rem] desktop:flex desktop:px-16">
          <div className="left hidden desktop:block w-[12.8125rem] h-56 mr-6" >
            <FilterCategory title="Type" items={typeFilters}/>
            <FilterCategory title="Rating" items={ratingFilters}/>
            <GenreFilter items={genreFilters}/>
          </div>
          <div className="right w-full relative">
            <InputBox value={query} setValue={setQuery}/>
            
          </div>
          
          
        </div>
     
      </div>
    </>
  );
};

export default page;
