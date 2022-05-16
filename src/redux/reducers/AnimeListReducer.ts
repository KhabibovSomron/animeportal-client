import { AnimeListDispatchType, ANIME_LIST_FAIL, ANIME_LIST_LOADING, ANIME_LIST_SUCCESS, IAnimeLists } from "../types/AnimeListTypes"

interface IDefaultState {
    loading: boolean,
    animeList?: IAnimeLists[]
}

const defaultState: IDefaultState = {
    loading: false
}

const AnimeListReducer = (state: IDefaultState = defaultState, action: AnimeListDispatchType): IDefaultState => {
    switch (action.type) {
        case ANIME_LIST_LOADING:
            return {
                loading: true
            }
        case ANIME_LIST_FAIL:
            return {
                loading: false
            }
        case ANIME_LIST_SUCCESS:
            return {
                loading: false,
                animeList: action.payload
            }
        default:
            return state
    }
}

export default AnimeListReducer