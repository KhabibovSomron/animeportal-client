import axios from "axios";
import { Dispatch } from "redux";
import { ANIME_LIST_URL } from "../../endpoints";
import { AnimeListDispatchType, ANIME_LIST_FAIL, ANIME_LIST_LOADING, ANIME_LIST_SUCCESS } from "../types/AnimeListTypes";


export const getAnimeList = () => async (dispatch: Dispatch<AnimeListDispatchType>) => {
    try {
        dispatch({
            type: ANIME_LIST_LOADING
        })

        const res = await axios.get(ANIME_LIST_URL)
        console.log(res)
        dispatch({
            type: ANIME_LIST_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
        dispatch({
            type: ANIME_LIST_FAIL
        })
    }
}