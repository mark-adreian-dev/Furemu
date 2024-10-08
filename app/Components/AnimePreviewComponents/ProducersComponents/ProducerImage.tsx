import Image from "next/image";
import { Producer, ProducerData } from "@/app/Types/Producer";
import { FetchAnime } from "@/app/Utilities/FetchAnime";

const ProducerImage = async ({ prodId, index }: { prodId: number, index: number }) => {
  const endpoint = `/producers/${prodId}`
  const prod: Producer = await FetchAnime(endpoint, index)
  const prodData: ProducerData = prod.data
 
  return (
    <div>
      <div className="w-[calc((100vw-4.5rem)/4)] h-[calc((100vw-5rem)/4)] relative rounded-xl overflow-hidden mb-[0.47338rem] tablet:w-[calc((100vw-10rem)/4)] desktop:w-[calc((40.5rem-2rem)/4)] desktop:h-[calc((40.5rem-2rem)/4)]">
        <Image
          src={prodData.images.jpg.image_url}
          alt={`${prodData.titles[0].title}-image`}
          fill
          draggable={false}
          sizes="100%"
          className="object-cover"
          priority={true}
          quality={100}
        />
      </div>
      <h3 className="text-white text-sm font-semibold leading-[0.875rem] mb-[0.23669rem]">
        {prodData.titles[0].title}
      </h3>
      <p className="text-xs text-light-blue">
        {!prodData.titles[1] ? prodData.titles[0].title : prodData.titles[1].title}
      </p>
    </div>
  )
};

export default ProducerImage
