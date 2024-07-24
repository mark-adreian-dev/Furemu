const BASE_URL = 'https://api.jikan.moe/v4'

enum Filter {
    AIRING = "airing",
    UPCOMING = "upcoming",
    BY_POPULARITY = "bypopularity",
    FAVORITE= "favorite"
}

enum Rating {
    ALL_AGES = "g",
    CHIDLREN = "pg",
    TEENS = "pg13",
    VIOLENCE_PROFANITY = "r17",
    NUDITY = "r",
    HENTAI = "rx"
}

interface Params {
    type?:    string,
    filter?:  Filter,
    rating?:  Rating,
    sfw?:     boolean,
    page?:    number,
    limit?:   number
}

const extractParams = (params: Params | undefined): string => {
    if (params === undefined) return ''
    else {
        let result: string = "?"
        Object.entries(params).map(([key, value], index) => {
            result += `${key}=${value}${index !== (Object.entries(params).length - 1) ? "&" : ""}`
            
        })
        return result
    }  
}

export async function FetchAnime <T>(endpoint: string, params?: Params): Promise<T> {
   
    try {
        const parameters = extractParams(params ? params : undefined)
        const url = `${BASE_URL}${endpoint}${parameters ? parameters : ''}`
        const response = await fetch(url, {method: 'GET'})
        const result : T = await response.json()
        return result
    } catch (err) {
        throw Error("Error with fetching tht data")
    }
    
}