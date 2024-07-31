"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FilterItem from "./FilterItem";
import { GenreData } from "@/app/Types/Genre";
import { useGlobalContext } from "./SearchPage";
import SmoothScroll from "../SmoothScroll";

interface Props {
  items: GenreData[]
}

const GenreFilter:React.FC<Props> = ({ items }) => {
  const { setGenre, genre } = useGlobalContext();
  const [activeValue, setActiveValue] = useState<string>("");
  const [genreVisible, setGenreVisible] = useState(items)
  const [searchActive, setSearchActive] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenreVisible(items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  const toggleSearch = () => {
    setGenreVisible(items)
    setSearchActive(!searchActive)
  }

  const clearSelection = () => {
    setActiveValue("");
    setGenre("");
  };

  useEffect(() => {
    setGenreVisible(items)
  }, [items])

  return (
    <div className="filter w-[12.8125rem] mb-6">
      <div className="filter-header flex justify-between items-center mb-6">
        <h3 className="text-sm text-white font-main font-semibold">Genre</h3>
        <div className="flex">
          <div className={`relative w-[0.875rem] h-[0.875rem] cursor-pointer`}
            onClick={toggleSearch}
          >
            <Image
              src={"/icons/search_filter_icon.svg"}
              alt="background-image"
              fill
              sizes="100%"
              className="object-cover object-bottom "
              draggable={false}
              priority={true}
              quality={100}
            />
          </div>

          <div
            className={`relative w-[0.875rem] h-[0.875rem] cursor-pointer ${
              genre === "" ? "hidden" : "block ml-1"
            }`}
            onClick={clearSelection}
          >
            <Image
              src={"/icons/clear_text_icon.svg"}
              alt="background-image"
              fill
              sizes="100%"
              className="object-cover object-bottom"
              draggable={false}
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className={`input input-bordered flex items-center px-0 bg-transparent mb-6 ${searchActive ? "block" : "hidden"}`}>
        <input onChange={handleChange} type="text" className="grow bg-transparent w-full h-[30px] border-2 border-accent rounded-[4px] font-main text-xs font-medium text-white pl-4" placeholder="Search genre..."/>
      </div>

      <SmoothScroll root={true}>
        <div className="options h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent scrollbar-thumb-rounded-full bg-transparent">
            <ul>
                {genreVisible.map((option) => (
                  <li key={option.name} className="px-2 py-1">
                    <FilterItem
                      title="Genre"
                      optionName={option.name}
                      optionValue={String(option.mal_id)}
                      activeValue={activeValue}
                      setActiveValue={setActiveValue}
                    />
                  </li>
                ))}
            </ul>
        
        </div>
      </SmoothScroll>
    </div>
  );
};

export default GenreFilter;
