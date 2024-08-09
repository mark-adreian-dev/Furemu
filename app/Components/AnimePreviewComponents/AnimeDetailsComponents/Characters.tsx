import Image from "next/image"
import { CharacterFull, Data } from "@/app/Types/Characters"
import { FetchAnime } from "@/app/Utilities/FetchAnime"
import { Type } from "@/app/Types/Enums"

const Characters = async ({ id, type }: { id: number, type: Type}) => {
    const endpoint = `/${type}/${id}/characters`
    const characters: CharacterFull = await FetchAnime(endpoint)
    const castData: Data[] = characters.data
    return (
        <div className="characters text-start mb-16">
            <p className=" text-white text-sm leading-6 font-bold mb-8 text-start tablet:text-center desktop:text-start">Characters:</p>
            <div className={` images w-full h-fit relative ${castData.length !== 0 ? "grid grid-cols-5 gap-2 " : ""}`}>
            {
                castData.length !== 0 ?
                castData.map((cast: Data) =>
                <div key={cast.character.mal_id} className="w-[calc((100vw-5rem)/5)] h-[calc((100vw-5rem)/5)] relative rounded-xl overflow-hidden tablet:w-[calc((100vw-10rem)/5)] desktop:w-[calc((40.5rem-2rem)/5)] desktop:h-[calc((40.5rem-2rem)/5)]">
                    <Image src={cast.character.images.jpg.image_url} alt={`${cast.character.name}-image`} draggable={false} fill sizes="(min-width: 1380px) 123px, (min-width: 780px) calc(20vw - 32px), calc(20vw - 16px)" className="object-cover" />
                </div>)
                :
                <p className="text-start w-full  text-light-blue text-sm leading-6 font-normal mb-3  desktop:text-start">N/A</p>
            }
            </div>
        </div>
    )
}

export default Characters