export interface BannerData {
    data: BannerSlide[];
}

export interface BannerSlide {
    mal_id:           number;
    itemIndex:        number;
    imagePathMobile:  string;
    imagePathTablet:  string;
    imagePathDesktop: string;
    description:      Description;
}

export interface Description {
    title:   string;
    context: string;
}
