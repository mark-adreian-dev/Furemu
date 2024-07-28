import { Genre } from "./GlobalTypes";

export interface Manga {
    data: MangaData;
}

export interface MangaData {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    chapters:        null;
    volumes:         null;
    status:          string;
    publishing:      boolean;
    published:       Published;
    score:           number;
    scored:          number;
    scored_by:       number;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      string;
    authors:         Author[];
    serializations:  Author[];
    genres:          Genre[];
    explicit_genres: any[];
    themes:          Author[];
    demographics:    Author[];
    relations:       Relation[];
    external:        External[];
}

export interface Author {
    mal_id: number;
    type:   Type;
    name:   string;
    url:    string;
}

export enum Type {
    Anime = "anime",
    Manga = "manga",
    People = "people",
}

export interface External {
    name: string;
    url:  string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Published {
    from:   Date;
    to:     null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Relation {
    relation: string;
    entry:    Author[];
}

export interface Title {
    type:  string;
    title: string;
}
