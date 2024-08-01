"use client";

import Image from "next/image";
import FilterItem from "./FilterItem";
import { useState } from "react";
import { useGlobalContext } from "./SearchPage";
import { Filter } from "@/app/Types/GlobalTypes";
import { Rating } from "@/app/Utilities/FetchAnime";

interface Props {
  title: string;
  items: Filter[];
}

const FilterCategory: React.FC<Props> = ({ title, items }) => {
  const [activeValue, setActiveValue] = useState<string>("");
  const { setType, setRating, setIsLoading, setMangaStatus } = useGlobalContext()
  
  const clearSelection = () =>{
    setIsLoading(true)

    setActiveValue("")
    if(title === "Type") setType("")
    if(title === "Rating") setRating(Rating.NO_RATING)
    if(title === "Status") setMangaStatus("")

  };

  return (
    <div className="filter w-[12.8125rem] mb-6">
      <div className="filter-header flex justify-between items-center mb-6">
        <h3 className="text-sm text-white font-main font-semibold">{title}</h3>
        <div
          className={`relative w-[0.875rem] h-[0.875rem] cursor-pointer ${ activeValue === "" ? "hidden" : "block" }`}
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
      <div className="options">
        <ul>
          {items.map((option) => (
            <li key={option.name} className="px-2 py-1">
              <FilterItem
                optionName={option.name}
                optionValue={option.value}
                activeValue={activeValue}
                setActiveValue={setActiveValue}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterCategory;
