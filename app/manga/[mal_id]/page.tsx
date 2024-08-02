import Header from "@/app/Components/Header";
import AnimePreview from "../../Components/AnimePreviewComponents/AnimePreview";
import SmoothScroll from "@/app/Components/SmoothScroll";

import { Anime } from "@/app/Types/Anime";
import { FetchAnime } from "@/app/Utilities/FetchAnime";
import { Type } from "@/app/Types/Enums"
import { Manga } from "@/app/Types/Manga";

const page = async ({ params }: { params: { mal_id: string } }) => {
  const animeId = params.mal_id;
  const endpoint= `/manga/${animeId}/full`
  const mangaData: Manga = await FetchAnime(endpoint);

  return (
    <>
      <SmoothScroll root={true}>
        <Header />
        <AnimePreview data={(mangaData as Manga).data} type={Type.manga}/>
      </SmoothScroll>
    </>
  );
};

export default page;
