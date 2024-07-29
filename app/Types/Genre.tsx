export interface Genre {
    data: GenreData[];
}

export interface GenreData {
    mal_id: number;
    name:   string;
    url:    string;
    count:  number;
}
