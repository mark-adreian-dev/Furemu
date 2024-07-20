import Image from "next/image"

const ProducerImage = async ({ prodId}: {prodId: number}) => {
    const prodResponse = await fetch(`https://api.jikan.moe/v4/producers/${prodId}`)
    const prodResult = await prodResponse.json()
    const prodData = await prodResult.data

    return (
        <div>
            <div className="w-[calc((100vw-4.5rem)/3)] h-[calc((100vw-4.5rem)/3)] relative rounded-xl overflow-hidden mb-[0.47338rem]">
                <Image src={prodData.images.jpg.image_url} alt={`${prodData.titles[0].title}-image`} fill draggable={false}  sizes="100%" className="object-cover" priority={true} quality={100}/>
            </div>
            <h3 className="text-white text-[0.71006rem] font-semibold leading-[0.71006rem] mb-[0.23669rem]">{prodData.titles[0].title}</h3>
            <p className="text-[0.355rem] text-light-blue">{prodData.titles[1].title}</p>
        </div>
        
       
    )
}

export default ProducerImage