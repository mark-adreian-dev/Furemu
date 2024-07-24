import React from "react";
import Header from "@/app/GlobalComponents/Header";
import AnimePreview from "./Components/AnimePreview";
import { Anime } from "@/app/Types/Anime";
import { FetchAnime } from "@/app/Hooks/FetchAnime";

const page = async ({ params }: { params: { mal_id: string } }) => {
  const animeId = params.mal_id;
  const endpoint= `/anime/${animeId}/full`
  const animeData: Anime = await FetchAnime(endpoint);

  return (
    <>
      <Header />
      <AnimePreview animeData={animeData} />
    </>
  );
};

export default page;
