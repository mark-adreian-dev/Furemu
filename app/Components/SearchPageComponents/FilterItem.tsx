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
  const { setType, setRating, setGenre, genre ,setIsLoading, setMangaStatus } = useGlobalContext() 
  // console.log(genre.toString().split(","))

  const updateRating = () => {
    if(optionValue === 'g') setRating(Rating.ALL_AGES)
    else if (optionValue === 'pg') setRating(Rating.CHIDLREN)
    else if (optionValue === 'pg13') setRating(Rating.TEENS)
    else if (optionValue === 'r17') setRating(Rating.VIOLENCE_PROFANITY)
    else if (optionValue === 'r') setRating(Rating.NUDITY)
    else if (optionValue === 'rx') setRating(Rating.HENTAI)
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

  const handleClick = () => {
    setIsLoading(true)
    if(title == "Genre") {
      if(genre.toString() === "") setGenre(String(optionValue))
      else if (genre.toString().split(",").includes(String(optionValue))) updateGenre()
      else setGenre(prevState => prevState += `,${optionValue}`)
    }

    else {
      if (optionValue == activeValue) {
        setActiveValue("")
        if(title === "Type") setType("")
        if(title === "Rating") setRating(Rating.NO_RATING)
        if(title === "Status") setMangaStatus("")
      }
  
      else if (activeValue == "") {
        setActiveValue(optionValue);
        if(title === "Type") setType(optionValue)
        if(title === "Rating") updateRating()
        if(title === "Status") setMangaStatus(optionValue)
        
      }
  
      else {
        setActiveValue(optionValue);
        if(title === "Type") setType(optionValue)
        if(title === "Rating") updateRating()
        if(title === "Status") setMangaStatus(optionValue)
      }
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
