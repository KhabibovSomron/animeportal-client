export interface IAnimeList {
    id: number,
    title: string,
    url: string,
    poster: string
}

export interface IGenre {
    id: number,
    name: string,
    url: string
}

export interface ICategory {
    id: number,
    name: string,
    url: string
}

//////////////////////////////////////////////////////////////

export interface IEpisode {
    id: number,
    title: string,
    number: number,
    image: string,
    video: string,
    duration: number,
    start_opening: number,
    end_opening: number
}

export interface ISeason {
    id: number,
    episodes: IEpisode[],
    number: number,
    year: number,
    title: string
}

export interface IRatingStar {
    id: number,
    value: number
}

export interface IShots {
    id: number,
    title: string,
    image: string
}

export interface IFilm {
    id: number,
    title: string,
    number: number,
    image: string,
    duration: number,
    file: string
}

export interface IDetails {
    id: number,
    genres: string[],
    seasons: ISeason[],
    title: string,
    description: string,
    poster: string,
    url: string,
    trailer: string,
    ageRating: string
}

export interface IReview {
    id: number,
    name: string,
    children: IReview[],
    text: string
}

export interface IAnimeDetailState {
    details: IDetails,
    shots: IShots[],
    ratingStar: IRatingStar,
    films: IFilm[],
    reviews: IReview[]
    error: string
    
}
