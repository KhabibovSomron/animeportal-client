import axios from "axios";
import { ANIME_LIST_URL, CATEGORIES_URL, GENRES_URL } from "../../endpoints";
import { animeListSlice } from "../reducers/AnimeSlices";
import { AppDispatch } from "../store";

export const fetchAnimeList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(animeListSlice.actions.animeListfetching())
        const res = await axios.get(ANIME_LIST_URL)
        dispatch(animeListSlice.actions.animeListfetchingSuccess(res.data))
    } catch (e: any) {
        dispatch(animeListSlice.actions.animeListfetchingError(e.message))
    }
}

export const fetchGenres = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(animeListSlice.actions.genreListfetching())
        const res = await axios.get(GENRES_URL)
        dispatch(animeListSlice.actions.genreListfetchingSuccess(res.data))
    } catch (err: any) {
        dispatch(animeListSlice.actions.genreListfetchingError(err.message))
    }
}

export const fetchCategories = () =>async (dispatch: AppDispatch) => {
    try {
        dispatch(animeListSlice.actions.categoryListfetching())
        const res = await axios.get(CATEGORIES_URL)
        dispatch(animeListSlice.actions.categoryListfetchingSuccess(res.data))
    } catch (err: any) {
        dispatch(animeListSlice.actions.genreListfetchingError(err.message))
    }
}