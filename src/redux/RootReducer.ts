import { combineReducers } from "redux";
import AnimeListReducer from "./reducers/AnimeListReducer";
import { filterReducer } from "./reducers/FilterGenresReducer";
import { searchReducer } from "./reducers/SearchTitleReducer";

const RootReducer = combineReducers({
    AnimeList: AnimeListReducer,
    filterGenres: filterReducer,
    searchTitle: searchReducer
});

export default RootReducer