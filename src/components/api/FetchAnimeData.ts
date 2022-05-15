import axios from "axios";
import { IAnimeList } from "../types/AnimeDataType";

const BASE_URL = "http://127.0.0.1:8000/anime/"

export const  fetchAnimeList = (): IAnimeList[] | any => {

    axios.get(BASE_URL + "animelist/").then((data) => {
        console.log(data.data)
        return data.data
    }).catch(err => {
        return ""
    })
}