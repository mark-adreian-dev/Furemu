export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Trailer {
    youtube_id: string;
    url:        string;
    embed_url:  string;
    images:     Images;
}

export interface Images {
    image_url:         string;
    small_image_url:   string;
    medium_image_url:  string;
    large_image_url:   string;
    maximum_image_url: string;
}

export interface Aired {
    from:   Date;
    to:     Date;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number;
    month: number;
    year:  number;
}

export interface Broadcast {
    day:      string;
    time:     string;
    timezone: string;
    string:   string;
}

export interface Title {
    type:  string;
    title: string;
}

export interface Demographic {
    mal_id: number;
    type:   Type;
    name:   string;
    url:    string;
}

export enum Type {
    Anime = "anime",
    Manga = "manga"
}

export interface Genre extends Demographic{}
export interface Producer extends Demographic{}
export interface Author extends Demographic{}
export interface Studios extends Demographic{}



//Search Page

export interface Filter {
    name: string,
    value: string | number
}
