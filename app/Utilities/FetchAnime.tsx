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

enum ResponseStatus {
    BadRequest = 400,
    NotFound = 404,
    MethodNotAllowed = 405,
    TooManyRequest = 429,
    InternalServerError = 500,
    ServiceUnavailable = 503
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

export async function FetchAnime <T>(endpoint: string, index?: number, params?: Params, ): Promise<T> {
    const rateLimitPerSec = 2
    const oneSecondMilis = 1000
    const delay = oneSecondMilis / rateLimitPerSec 
    const delayInMilis = index ? delay * index : 0

    return new Promise((resolve => setTimeout(resolve, delayInMilis))).then(async() => {
        
        const parameters = extractParams(params ? params : undefined)
        const url = `${BASE_URL}${endpoint}${parameters ? parameters : ''}`
        const response = await fetch(url, {
            method: 'GET'
        })

        if(response.status === ResponseStatus.TooManyRequest) throw Error("Too many request! rate limit exceed")
            console.log(`\nEndpoint : ${endpoint}\nResponse Status: ${response.status}\nDelay: ${delayInMilis}`)
        
        const result : T = await response.json()
        return result
    })
}