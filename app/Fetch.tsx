import { TopAnime } from "./Types/TopAnime"
import { Anime } from "./Types/Anime"
import { CharacterFull } from "./Types/Characters"
import { Producer } from "./Types/Producer"

interface Params {
    page: number
  }
  
export const GetTopAnimeData = async (endpoint: string, params: Params): Promise<TopAnime> => {
    const url = `${endpoint}?page=${params.page}`
    const response = await fetch(url, {method: 'GET'})
    const result : TopAnime = await response.json()
    return result
}

export const GetAnimeData = async ( endPoint: string ): Promise<Anime> => {
    const response = await fetch(endPoint)  
    const result: Anime = await response.json()
    return result
}


export const GetCharactedData = async (id: number): Promise<CharacterFull> => {
    const castResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const castResult: CharacterFull = await castResponse.json()
    return castResult
}

export const GetProducerData = async (prodId: number): Promise<Producer> => {
    const prodResponse = await fetch(`https://api.jikan.moe/v4/producers/${prodId}`)
    const prodResult: Producer = await prodResponse.json()
    return prodResult
}