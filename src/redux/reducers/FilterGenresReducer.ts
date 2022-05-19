export interface IFilterGenre {
    genres: string[]
}

interface IAction {
    type: string,
    payload: IFilterGenre
}

const defaultValue: IFilterGenre = {
    genres: []
}

const SET_GENRES = "SET_GENRES"

export const filterReducer = (state: IFilterGenre = defaultValue, action: IAction) => {
    switch (action.type) {
        case SET_GENRES:
            return {...state, genres: action.payload.genres}    
        default:
            return state
    }
}


export const setFilterGenresAction = (payload: IFilterGenre) => ({type: SET_GENRES, payload})