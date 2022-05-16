import { combineReducers } from "redux";
import AnimeListReducer from "./reducers/AnimeListReducer";

const RootReducer = combineReducers({
    AnimeList: AnimeListReducer
});

export default RootReducer