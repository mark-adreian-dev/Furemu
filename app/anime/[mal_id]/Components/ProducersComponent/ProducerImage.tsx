import Image from "next/image"
import { Producer, ProducerData } from "@/app/Types/Producer"

const GetProducerData = async (prodId: number): Promise<Producer> => {
    const prodResponse = await fetch(`https://api.jikan.moe/v4/producers/${prodId}`)
    const prodResult: Producer = await prodResponse.json()
    return prodResult
}
const ProducerImage = async ({ prodId}: {prodId: number}) => {
    const prod: Producer = await GetProducerData(prodId)
    const prodData: ProducerData = prod.data

    return (
        <div>
            <div className="w-[calc((100vw-4.5rem)/4)] h-[calc((100vw-5rem)/4)] relative rounded-xl overflow-hidden mb-[0.47338rem] tablet:w-[calc((100vw-10rem)/4)]">
                <Image src={prodData.images.jpg.image_url} alt={`${prodData.titles[0].title}-image`} fill draggable={false}  sizes="100%" className="object-cover" priority={true} quality={100}/>
            </div>
            <h3 className="text-white text-sm font-semibold leading-[0.875rem] mb-[0.23669rem]">{prodData.titles[0].title}</h3>
            <p className="text-xs text-light-blue">{!prodData.titles[1] ? prodData.titles[0].title : prodData.titles[1].title}</p>
        </div>
    )
}

export default ProducerImage