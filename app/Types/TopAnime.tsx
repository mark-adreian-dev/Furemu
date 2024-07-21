import { Image, Trailer, Title, Aired, Broadcast, Producer, Studios, Genre, Demographic} from "./GlobalTypes";

export interface TopAnime {
    pagination: Pagination,
    data: TopAnimeData[]
}

export interface TopAnimeData {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    source:          string;
    episodes:        number;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           number;
    scored_by:       number;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      string;
    season:          string;
    year:            number;
    broadcast:       Broadcast;
    producers:       Producer[];
    licensors:       any[];
    studios:         Studios[];
    genres:          Genre[];
    explicit_genres: any[];
    themes:          any[];
    demographics:    Demographic[];
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}