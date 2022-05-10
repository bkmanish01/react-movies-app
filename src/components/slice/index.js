import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./MovieSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
});

export default rootReducer;