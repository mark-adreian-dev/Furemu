"use client";

import { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "./SearchPage";
import { Rating } from "@/app/Utilities/FetchAnime";
interface Props {
  optionName: string;
  optionValue: string | Rating;
  activeValue: string ;
  setActiveValue: Dispatch<SetStateAction<string>>;
  title: string
}

const FilterItem: React.FC<Props> = ({
  optionName,
  optionValue,
  activeValue,
  setActiveValue,
  title
}) => {
  const { setType, setRating, setGenre, genre, setIsLoading, setMangaStatus } = useGlobalContext() 
  
  const updateRating = () => {
    switch(optionValue){

      case Rating.ALL_AGES:
        setRating(Rating.ALL_AGES)
        break

      case Rating.CHIDLREN:
        setRating(Rating.CHIDLREN)
        break

      case Rating.TEENS:
        setRating(Rating.TEENS)
        break

      case Rating.VIOLENCE_PROFANITY:
        setRating(Rating.VIOLENCE_PROFANITY)
        break

      case Rating.NUDITY:
        setRating(Rating.NUDITY)
        break

      case Rating.HENTAI:
        break
    }
  }

  const updateGenre = () => {
    let updatedIdList = ""
    const updatedID = genre.toString().split(',').filter(item => item != optionValue)

    updatedID.map(ID => {
      if(updatedIdList === "") {
        updatedIdList += ID
      }
      else updatedIdList += `,${ID}`
    })

    setGenre(updatedIdList)
  }

  const resetFilter = () => {
    setActiveValue("")
    if(title === "Type") setType("")
    if(title === "Rating") setRating(Rating.NO_RATING)
    if(title === "Status") setMangaStatus("")
  }

  const addAsFilters = () => {
    setActiveValue(optionValue);
    if(title === "Type") setType(optionValue)
    if(title === "Status") setMangaStatus(optionValue)
    if(title === "Rating") updateRating()
  }

  const handleClick = () => {
    setIsLoading(true)
    if(title == "Genre") {
      if(genre.toString() === "") setGenre(String(optionValue))                         //add genre id to parameter if no id was included yet
      else if (genre.toString().split(",").includes(String(optionValue))) updateGenre() //remove genre id to parameter
      else setGenre(prevState => prevState += `,${optionValue}`)                        //add genre id to parameter
    }

    else {
      if (optionValue == activeValue) resetFilter() //remove as active filter
      else addAsFilters()                           //set as active filter
    }
  };

  return (
    <div
      className="option flex justify-start items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-4 h-4 rounded-full mr-2 border-[0.5px] border-solid border-accent flex justify-center items-center">
        {
          genre.toString().split(",").includes(String(optionValue)) || optionValue === activeValue ?
           <div className={`w-[10px] h-[10px] rounded-full bg-accent`}></div>
           :<div className={`w-[10px] h-[10px] rounded-full`}></div>    
        }
  
      </div>
      <p className="text-white ">{optionName}</p>
    </div>
  );
};

export default FilterItem;
