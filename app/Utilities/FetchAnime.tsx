enum Filter {
  AIRING = "airing",
  UPCOMING = "upcoming",
  BY_POPULARITY = "bypopularity",
  FAVORITE = "favorite",
}

export enum Rating {
  NO_RATING = "",
  ALL_AGES = "g",
  CHIDLREN = "pg",
  TEENS = "pg13",
  VIOLENCE_PROFANITY = "r17",
  NUDITY = "r",
  HENTAI = "rx",
}

export enum SearchType { 
  TV ="tv",
  MOVIE = "movie",
  OVA = "ova",
  SPECIAL = "special",
  ONA = "ona",
  MUSIC = "music",
  CM = "cm",
  PV = "pv",
  TV_SPECIAL = "tv_special"
}

enum Status {
  AIRING = "airing",
  COMPELETE = "complete",
  UPCOMING = "upcoming"
}

enum Order {
  DESC = "desc",
  ASC = "asc"
}
export interface Params {
  type?: string;
  filter?: Filter;
  rating?: Rating;
  sfw?: boolean;
  page?: number;
  limit?: number;
  unapproved?: boolean,
  q?: string,
  searchType?: SearchType,
  score?: number,
  min_score?: number,
  max_score?: number,
  status?: string,
  genres?: string,
  genres_exclude?: string,
  sort?: Order,
  letter?: string,
  producers?: string,
  start_date?: string,
  end_date?: string
}

enum ResponseStatus {
  BadRequest = 400,
  NotFound = 404,
  MethodNotAllowed = 405,
  TooManyRequest = 429,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

const BASE_URL = "https://api.jikan.moe/v4";

export const extractParams = (params: Params | null): string => {
  if (params === null) return "";
  else {
    let result: string = "?";
    Object.entries(params).map(([key, value], index) => {
      result += `${key}=${value}${
        index !== Object.entries(params).length - 1 ? "&" : ""
      }`;
    });
    return result;
  }
};

export async function FetchAnime<T>(
  endpoint: string,
  delayRate?: number,
  params?: Params, 
  signal?: AbortSignal
): Promise<T | null> {
  //This is to ensure that the request sent to JikanAPI does not reach or exceeds the rate limit
  //This may cause slow performance since I'm limiting request sent to the API and prevent any runtime error at most
  const delay = 336;
  const delayInMilis = delayRate ? delay * delayRate : 0;

  return new Promise((resolve) => 
    setTimeout(resolve, delayInMilis))
      .then(async () => {

        const parametersObject = params ? params : null
        const requestParameters = extractParams(parametersObject);
        const url = `${BASE_URL}${endpoint}${parametersObject !== null ? requestParameters : ""}`;
        
        
          const response = await fetch(url, {
            method: "GET",
            signal: signal
          });

          switch(response.status){

            case ResponseStatus.TooManyRequest:
              console.log("You’ve sent too many requests in a short period of time. Please wait a moment and try again later.");

            case ResponseStatus.NotFound:
              console.log("Sorry, the page you're looking for doesn’t exist. It may have been moved or deleted. Please check the URL for errors or return to the homepage to find what you're looking for.");
              
            case ResponseStatus.InternalServerError:
              console.log("Oops! Something went wrong on our end. We’re working to fix it as quickly as possible. Please try again later");
          
            case ResponseStatus.BadRequest:
              console.log("It looks like there was an issue with the request you sent. Please check the information you’ve provided and try again.");
            
            case ResponseStatus.ServiceUnavailable:
              console.log("We’re currently experiencing technical difficulties and are working to get things back up and running. Please try again later.");
            
            case ResponseStatus.MethodNotAllowed:
              console.log("The method used for this request is not allowed. Please check the request and try using a different method.");
            
          }
          
          const result: T = await response.json();
          return result;
      
      })
      
      .catch(error => {
        if(error instanceof Error) console.log("Error occurred: " + error.message)
        return null
      })
}
