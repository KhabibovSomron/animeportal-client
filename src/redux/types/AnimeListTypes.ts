export const ANIME_LIST_LOADING = "ANIME_LIST_LOADING";
export const ANIME_LIST_FAIL = "ANIME_LIST_FAIL";
export const ANIME_LIST_SUCCESS = "ANIME_LIST_SUCCESS";

export interface IAnimeLists {
    title: string,
    url: string
}

export interface IAnimeListLoading {
    type: typeof ANIME_LIST_LOADING
}

export interface IAnimeListFail {
    type: typeof ANIME_LIST_FAIL
}

export interface IAnimeListSuccess {
    type: typeof ANIME_LIST_SUCCESS,
    payload: IAnimeLists[]
}

export type AnimeListDispatchType = IAnimeListLoading | IAnimeListFail | IAnimeListSuccess;