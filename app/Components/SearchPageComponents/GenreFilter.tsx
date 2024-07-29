"use client"
import { useState } from "react";
import Image from "next/image"
import FilterItem from "./FilterItem";
import { GenreData } from "@/app/Types/Genre";

const GenreFilter = ({ items }: { items: GenreData[] | undefined}) => {
  const [activeValue, setActiveValue] = useState<string | number>(0)

  const clearSelection = () => setActiveValue("")
  
  return (
    <div className="filter w-[12.8125rem] mb-6">
        <div className="filter-header flex justify-between items-center mb-6">
            <h3 className="text-sm text-white font-main font-semibold">Genre</h3>
            <div className={`relative w-[0.875rem] h-[0.875rem] ${activeValue === "" ? "hidden" : "block"}`} onClick={clearSelection}>
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

                {
                    items?.map(option => <li key={option.name} className="px-2 py-1">
                    <FilterItem optionName={option.name} optionValue={option.mal_id} activeValue={activeValue} setActiveValue={setActiveValue}/>
                    </li>)
                        
                }
                
            </ul>
        </div>
    </div>
  )
}

export default GenreFilter