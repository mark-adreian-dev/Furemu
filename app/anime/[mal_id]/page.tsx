import Header from "@/app/Components/Header";
import AnimePreview from "./Components/AnimePreview";
import { Anime } from "@/app/Types/Anime";
import { FetchAnime } from "@/app/Utilities/FetchAnime";
import SmoothScroll from "@/app/Components/SmoothScroll";

const page = async ({ params }: { params: { mal_id: string } }) => {
  const animeId = params.mal_id;
  const endpoint= `/anime/${animeId}/full`
  const animeData: Anime = await FetchAnime(endpoint);

  return (
    <>
      <SmoothScroll root={true}>
        <Header />
        <AnimePreview animeData={animeData} />
      </SmoothScroll>
    </>
  );
};

export default page;
