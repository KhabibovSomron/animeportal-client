import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnimeDetailState, IDetails, IFilm, IReview, IShots} from "../types/AnimeType";


const initialState: IAnimeDetailState = {
    details: {
        id: 0,
        genres: [],
        seasons: [],
        title: "",
        description: "",
        poster: "",
        url: "",
        trailer: "",
        ageRating: ''
    },
    shots: [],
    ratingStar: {
        id: 0,
        value: 0
    },
    films: [],
    reviews: [],
    error: ""

}

export const animeDetailSlice = createSlice({
    name: "animeDetail",
    initialState,
    reducers: {
        animeDetailsLoadedSuccess(state, action: PayloadAction<IDetails>) {
            state.details = action.payload
            state.error = ''
        },
        animeDetailsError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        animeFilmsLoadedSuccess(state, action: PayloadAction<IFilm[]>) {
            state.films = action.payload
            state.error = ''
        },
        animeFilmsError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        animeShotsLoadedSuccess(state, action: PayloadAction<IShots[]>) {
            state.shots = action.payload
            state.error = ''
        },
        animeShotsError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        reviewCreatedSuccess(state) {
            state.error = ''
        },
        reviewCreatedError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        reviewsLoadedSuccess(state, action: PayloadAction<IReview[]>) {
            state.reviews = action.payload
            state.error = ''
        },
        reviewsLoadedError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export default animeDetailSlice.reducer;