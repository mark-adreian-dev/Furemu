"use client"
import { useState } from "react";
import Image from "next/image"
import { Filter } from "@/app/Types/GlobalTypes";
import FilterItem from "./FilterItem";

const FilterCategory = ({ title, items}: {title: string, items: Filter[] }) => {
  const [activeValue, setActiveValue] = useState<string | number>("")

  const clearSelection = () => setActiveValue("")
  
  return (
    <div className="filter w-[12.8125rem] mb-6">
        <div className="filter-header flex justify-between items-center mb-6">
            <h3 className="text-sm text-white font-main font-semibold">{title}</h3>
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
                    items.map(option => 
                        <li key={option.name} className="px-2 py-1">
                            <FilterItem optionName={option.name} optionValue={option.value} activeValue={activeValue} setActiveValue={setActiveValue}/>
                        </li>)
                }
                
            </ul>
        </div>
    </div>
  )
}

export default FilterCategory