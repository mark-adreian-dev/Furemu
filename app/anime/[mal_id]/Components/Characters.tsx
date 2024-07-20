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
        <div className="characters text-center">
            <p className=" text-white text-sm leading-6 font-bold mb-8">Characters:</p>
            <div className="images grid grid-cols-4 gap-2 w-full h-fit">

            {
                castData.map((item: Item) =>
                <div key={item.character.mal_id} className="w-[calc((100vw-4.5rem)/4)] h-[calc((100vw-4.5rem)/4)] relative rounded-xl overflow-hidden">
                    <Image src={item.character.images.jpg.image_url} alt={`${item.character.name}-image`} draggable={false} fill sizes="100%" className="object-cover" priority={true} quality={100}/>
                </div>)
            }
            </div>
        </div>
    )
}

export default Characters