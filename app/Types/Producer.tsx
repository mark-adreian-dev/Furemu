import { Title } from "@/app/Types/GlobalTypes";

export interface Producer{
    data: ProducerData;
}

export interface ProducerData {
    mal_id:      number;
    url:         string;
    titles:      Title[];
    images:      Images;
    favorites:   number;
    established: Date;
    about:       string;
    count:       number;
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url: string;
}
