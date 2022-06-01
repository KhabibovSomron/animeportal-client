import axios from "axios";
import { FILTER_URL, SEARCH_URL } from "../../endpoints";
import { animeListSlice } from "../reducers/AnimeSlices";
import { AppDispatch } from "../store";

export const filterAnimeList = (filterGenres: number[]) => async (dispatch: AppDispatch) => {
try {
    let new_url = FILTER_URL + '?'
    filterGenres.forEach((item, index) => {
        if (index === 0) {
            new_url = new_url + `genres=${item}`
        } else {
            new_url = new_url + `&genres=${item}`
        }
    })
    console.log(new_url)
    dispatch(animeListSlice.actions.animeListfetching())
    const res = await axios.get(new_url)
    dispatch(animeListSlice.actions.animeListfetchingSuccess(res.data))
} catch (err: any) {
    dispatch(animeListSlice.actions.animeListfetchingError(err.message))
}
}

export const searchAnime = (title: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(animeListSlice.actions.animeListfetching())
        const res = await axios.get(SEARCH_URL, {
            params: {
                "title": title
            }
        })
        dispatch(animeListSlice.actions.animeListfetchingSuccess(res.data))
    } catch (err: any) {
        dispatch(animeListSlice.actions.animeListfetchingError(err.message))
        
    }
}