import { Image, Trailer, Title, Aired, Broadcast, Producer, Studios, Genre, Demographic} from "@/app/Types/GlobalTypes";


export interface Anime {
    data: AnimeData;
}

interface Jpg {
    jpg: Image
}

export interface AnimeData {
    mal_id:  number;
    url:     string;
    images:  Jpg;
    trailer: Trailer;
    approved:       boolean;
    titles:         Title[];
    title:          string;
    title_english:  string;
    title_japanese: string;
    title_synonyms: string[];
    type:           string;
    source:         string;
    episodes:       number;
    status:         string;
    airing:         boolean;
    aired:          Aired;
    duration:       string;
    rating:         string;
    score:          number;
    scored_by:      number;
    rank:           number;
    popularity:     number;
    members:        number;
    favorites:      number;
    synopsis:   string;
    background: string;
    season:     string;
    year:       number;
    broadcast:  Broadcast;
    producers:  Producer[];
    licensors:  any[];
    studios:    Studios[];
    genres:     Genre[];
    explicit_genres: any[];
    themes:          any[];
    demographics:    Demographic[];
    relations:       Relation[];
    theme:           Theme;
    external:        External[];
    streaming:       Streaming[];
}


export interface External {
    name: string;
    url:  string;
}

export interface Relation {
    relation: string;
    entry:    Demographic[];
}

export interface Theme {
    openings: string[];
    endings:  string[];
}

export interface Streaming extends External{}
