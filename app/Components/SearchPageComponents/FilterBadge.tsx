"use client";

import Badge from "../AnimePreviewComponents/BasicInfoComponents/Badge";
import { GenreData } from "@/app/Types/Genre";
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

const FilterBadge: React.FC<Props> = ({resultLength, genreActiveFilter, genreFilter, rating, type, mangaFilter }) => {
  const { ratingFilters, animeTypeFilters, mangaStatus, mangaTypeFilters} = useGlobalContext();
  return (
    <div className="desktop:flex justify-between items-start w-full mt-6 hidden">
      <div>
        <div className="badge-container flex flex-wrap">
          {
            genreFilter
              .filter((item) => genreActiveFilter.split(",").includes(String(item.mal_id)))
              .map((item) => (
                <Badge key={item.mal_id} text={item.name} />
              ))
          }
        </div>
        <div className="badge-container flex flex-wrap">
          {mangaFilter.map(item => item.value === mangaStatus ? <Badge key={item.value} text={item.name}/> : null)}
          {ratingFilters.map((item) => item.value === rating ? <Badge key={item.value} text={item.name} /> : null)}
          {mangaTypeFilters.map((item) => item.value === type ? <Badge key={item.value} text={item.name} />: null )}
          {animeTypeFilters.map((item) => item.value === type ? <Badge key={item.value} text={item.name} /> : null)}
        </div>
      </div>
      <p className="text-sm font-medium font-main">
        {resultLength} result found
      </p>
    </div>
  );
};

export default FilterBadge;
