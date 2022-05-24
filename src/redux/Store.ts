import { configureStore, combineReducers } from '@reduxjs/toolkit'
import animeListReducer from './reducers/AnimeSlices'
import filterSearchReducer from './reducers/FilterSearchSlices'
import UserReducer from './reducers/UserReducer'

const store = configureStore({
    reducer: {
        animeList: animeListReducer,
        filterSearch: filterSearchReducer,
        user: UserReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store