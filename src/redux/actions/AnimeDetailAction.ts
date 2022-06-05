import axios from "axios";
import { ANIME_DETAIL_URL, ANIME_FILMS, CREATE_USER_URL, GET_REVIEWS_URL, REVIEW_CREATE_URL, SHOTS_URL } from "../../endpoints";
import { animeDetailSlice } from "../reducers/AnimeDetailSlices";
import { AppDispatch } from "../store";

export const fetchAnimeDetails = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(ANIME_DETAIL_URL + `${id}/`)
        dispatch(animeDetailSlice.actions.animeDetailsLoadedSuccess(res.data))
    } catch (err: any) {
        dispatch(animeDetailSlice.actions.animeDetailsError(err.message))
    }
}

export const fetchAnimeShots = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(SHOTS_URL + `${id}/`)
        dispatch(animeDetailSlice.actions.animeShotsLoadedSuccess(res.data))
    } catch (err: any) {
        dispatch(animeDetailSlice.actions.animeShotsError(err.message))
    }
}

export const fetchFilms = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(ANIME_FILMS + `${id}/`)
        dispatch(animeDetailSlice.actions.animeFilmsLoadedSuccess(res.data))
    } catch (err: any) {
        dispatch(animeDetailSlice.actions.animeFilmsError(err.message))
    }
}

export const createReview = (user_id: number, name: string, text: string, parent: number | null, anime_id: number) => async (dispatch: AppDispatch) => {
    try {
        let data = {}
        if (parent !== null) {
            data = {
                "user": user_id,
                "name": name,
                "text": text,
                "anime": anime_id,
                "parent": parent
            }
        } else {
            data = {
                "user": user_id,
                "name": name,
                "anime": anime_id,
                "text": text
            }
        }
        await axios.post(REVIEW_CREATE_URL, data)
        dispatch(animeDetailSlice.actions.reviewCreatedSuccess())
    } catch (err: any) {
        dispatch(animeDetailSlice.actions.reviewCreatedError(err.message))
    }
}

export const fetchAllReviews = (id: number) =>async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(GET_REVIEWS_URL + `${id}/`)
        dispatch(animeDetailSlice.actions.reviewsLoadedSuccess(res.data))
    } catch (err: any) {
        dispatch(animeDetailSlice.actions.reviewsLoadedError(err.message))
    }
}