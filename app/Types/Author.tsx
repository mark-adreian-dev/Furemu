export interface Author {
    data: AuthorData;
}

export interface AuthorData {
    mal_id:          number;
    url:             string;
    website_url:     null;
    images:          Images;
    name:            string;
    given_name:      string;
    family_name:     string;
    alternate_names: any[];
    birthday:        Date;
    favorites:       number;
    about:           string;
    anime:           AnimeElement[];
    manga:           Manga[];
    voices:          any[];
}

export interface AnimeElement {
    position: AnimePosition;
    anime:    MangaClass;
}

export interface MangaClass {
    mal_id: number;
    url:    string;
    images: { [key: string]: Image };
    title:  string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export enum AnimePosition {
    AddOriginalCreator = "add Original Creator",
    AddPrincipleDrawingEp01 = "add Principle Drawing (ep 01)",
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url: string;
}

export interface Manga {
    position: MangaPosition;
    manga:    MangaClass;
}

export enum MangaPosition {
    Art = "Art",
    StoryArt = "Story & Art",
}
