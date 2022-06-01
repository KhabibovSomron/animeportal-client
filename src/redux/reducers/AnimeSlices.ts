import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnimeList, ICategory, IGenre } from "../types/AnimeType";

interface IAnimeListState {
    animelist: IAnimeList[],
    genres: IGenre[],
    categories: ICategory[],
    isLoading: boolean,
    error: string
}

const initialState: IAnimeListState = {
    animelist: [],
    genres: [],
    categories: [],
    isLoading: false,
    error: ''
}

export const animeListSlice = createSlice({
    name: "animelist",
    initialState,
    reducers: {
        animeListfetching(state) {
            state.isLoading = true
        },

        animeListfetchingSuccess(state, action: PayloadAction<IAnimeList[]>) {
            state.isLoading = false
            state.error = ''
            state.animelist = action.payload
        },

        animeListfetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },

        genreListfetching(state) {
            state.isLoading = true
        },

        genreListfetchingSuccess(state, action: PayloadAction<IGenre[]>) {
            state.isLoading = false
            state.error = ''
            state.genres = action.payload
        },

        genreListfetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },

        categoryListfetching(state) {
            state.isLoading = true
        },

        categoryListfetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoading = false
            state.error = ''
            state.categories = action.payload
        },

        categoryListfetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default animeListSlice.reducer;