import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFilterGenre, ISearchTitle } from "../types/FilterSearchType"


interface ISearchFilter {
    filter: number[],
    search: string
}

const initialState: ISearchFilter = {
    filter: [],
    search: ''
} 

export const filterSearchSlice = createSlice({
    name: "filterSearch",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },

        setFilter(state, action: PayloadAction<number>) {
            state.filter.push(action.payload)
        },

        removeFilter(state, action: PayloadAction<number>) {
            state.filter = state.filter.filter(item => item !== action.payload)
        }
    }
})


export default filterSearchSlice.reducer