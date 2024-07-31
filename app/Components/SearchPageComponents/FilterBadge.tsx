"use client";

import { useEffect, useState } from "react";
import { GenreData } from "@/app/Types/Genre";
import Badge from "../AnimePreviewComponents/BasicInfoComponents/Badge";
import { useGlobalContext } from "./SearchPage";
import { Filter } from "@/app/Types/GlobalTypes";

interface Props {
  resultLength: number;
  genreFilter: GenreData[];
  genreActiveFilter: string;
  rating: string;
  type: string;
  mangaFilter: Filter[]
  
}

const FilterBadge: React.FC<Props> = ({
  resultLength,
  genreActiveFilter,
  genreFilter,
  rating,
  type,
  mangaFilter
}) => {
  const [activeFilterId, setActiveFilterId] = useState<string[]>(
    genreActiveFilter.split(",")
  );
  const [genreFilterAll, setGenreFilterAll] = useState<GenreData[]>(
    genreFilter.filter((item) => activeFilterId.includes(String(item.mal_id)))
  );
  const { ratingFilters, animeTypeFilters, mangaStatus, mangaTypeFilters} = useGlobalContext();
  useEffect(() => {
    setActiveFilterId(genreActiveFilter.split(","));
    setGenreFilterAll(
      genreFilter.filter((item) => activeFilterId.includes(String(item.mal_id)))
    );
  }, [genreActiveFilter]);

  return (
    <div className="desktop:flex justify-between items-start w-full mt-6 hidden">
      <div>
        <div className="badge-container flex flex-wrap">
          {
            genreFilter
              .filter((item) => activeFilterId.includes(String(item.mal_id)))
              .map((item) => (
                <Badge key={item.mal_id} text={item.name} />
              ))
          }
        </div>
        <div className="badge-container flex flex-wrap">
          {
            mangaFilter.map(item => {
              if(item.value === mangaStatus) return <Badge key={item.value} text={item.name}/>
            })
          }
          {
            ratingFilters.map((item) => {
              if (item.value === rating) return <Badge key={item.value} text={item.name} />;
            })
          }

          { 
            mangaTypeFilters.map((item) => {
              if (item.value === type) return <Badge key={item.value} text={item.name} />;
            })
          }
          
          {
            animeTypeFilters.map((item) => {
              if (item.value === type) return <Badge key={item.value} text={item.name} />;
            })
          }
          
        </div>
      </div>

      <p className="text-sm font-medium font-main">
        {resultLength} result found
      </p>
    </div>
  );
};

export default FilterBadge;
