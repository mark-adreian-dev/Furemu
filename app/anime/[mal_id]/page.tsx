import React from "react";
import Header from "@/app/GlobalComponents/Header";
import AnimePreview from "./Components/AnimePreview";
import { Anime } from "@/app/Types/Anime";
import { BASE_URL } from "@/app/page";

const getAnimeData = async (endPoint: string): Promise<Anime> => {
  const response = await fetch(endPoint);
  const result: Anime = await response.json();
  return result;
};

const page = async ({ params }: { params: { mal_id: string } }) => {
  const animeId = params.mal_id;
  const result: Anime = await getAnimeData(`${BASE_URL}/anime/${animeId}/full`);
  const animeData = result;

  return (
    <>
      <Header />
      <AnimePreview animeData={animeData} />
    </>
  );
};

export default page;
