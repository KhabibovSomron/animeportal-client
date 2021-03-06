import { configureStore } from '@reduxjs/toolkit'
import animeDetailReducer from './reducers/AnimeDetailSlices'
import animeListReducer from './reducers/AnimeSlices'
import filterSearchReducer from './reducers/FilterSearchSlices'
import userReducer from './reducers/UserSlices'

const store = configureStore({
    reducer: {
        animeList: animeListReducer,
        filterSearch: filterSearchReducer,
        user: userReducer,
        animeDetail: animeDetailReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store