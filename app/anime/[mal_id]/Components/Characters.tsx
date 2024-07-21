import Image from "next/image"

interface ImageUrl{
    image_url: string
}

interface Webp {
  image_url: string,
  small_image_url: string
}
interface Images {
  jpg: ImageUrl,
  webp: Webp
}
interface Character {
  mal_id: number,
  url: string,
  images: Images,
  name: string
}

interface Item {
  character: Character,
  role: string,
  favorites: number
}
  

const Characters = async ({ id }: { id: number}) => {
    const castResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const castResult = await castResponse.json()
    const castData = castResult.data.filter((item: Item) => 
        item.role.toLowerCase() === "main" || item.favorites > 100
        
    )


  
    return (
        <div className="characters text-start mb-16 ">
            <p className=" text-white text-sm leading-6 font-bold mb-8 text-start tablet:text-center">Characters:</p>
            <div className="images grid grid-cols-5 gap-2 w-full h-fit relative">

            {
                castData.map((item: Item) =>
                <div key={item.character.mal_id} className="w-[calc((100vw-5rem)/5)] h-[calc((100vw-5rem)/5)] relative rounded-xl overflow-hidden tablet:w-[calc((100vw-10rem)/5)]">
                    <Image src={item.character.images.jpg.image_url} alt={`${item.character.name}-image`} draggable={false} fill sizes="100%" className="object-cover" priority={true} quality={100}/>
                </div>)
            }
            </div>
        </div>
    )
}

export default Characters