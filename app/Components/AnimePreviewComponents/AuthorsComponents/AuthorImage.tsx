import Image from "next/image";

import { FetchAnime } from "@/app/Utilities/FetchAnime";
import { Author, AuthorData } from "@/app/Types/Author";

const AuthorImage = async ({ authorId, index }: { authorId: number, index: number }) => {
  const endpoint = `/people/${authorId}`;
  const author: Author = await FetchAnime(endpoint, index);
  const authorData: AuthorData = author.data;

  return (
    <div>
      <div className="w-[calc((100vw-4.5rem)/4)] h-[calc((100vw-5rem)/4)] relative rounded-xl overflow-hidden mb-[0.47338rem] tablet:w-[calc((100vw-10rem)/4)] desktop:w-[calc((40.5rem-2rem)/4)] desktop:h-[calc((40.5rem-2rem)/4)]">
        <Image
          src={authorData.images.jpg.image_url}
          alt={`${authorData.name}-image`}
          fill
          draggable={false}
          sizes="100%"
          className="object-cover"
          priority={true}
          quality={100}
        />
      </div>
      <h3 className="text-white text-sm font-semibold leading-[0.875rem] mb-[0.23669rem]">
        {authorData.name}
      </h3>
    </div>
  )
};

export default AuthorImage
