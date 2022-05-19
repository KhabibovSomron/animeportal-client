export interface ISearchTitle {
    title: string
}

interface IAction {
    type: string,
    payload: ISearchTitle
}

const defaultValue: ISearchTitle = {
    title: ""
}

const SET_TITLE = "SET_TITLE"

export const searchReducer = (state: ISearchTitle = defaultValue, action: IAction) => {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.payload.title}    
        default:
            return state
    }
}


export const setSearchTitleAction = (payload: ISearchTitle) => ({type: SET_TITLE, payload})