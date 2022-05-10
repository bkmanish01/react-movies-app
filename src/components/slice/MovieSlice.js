import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    movies: [],
    loading: false,
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMovies: state => {
            state.loading = true
        },
        getMoviesSuccess: (state, {payload}) => {
            state.movies = payload
            state.loading = false
        },
        getMoviesFailure: state => {
            state.loading = false
        }
    }
})

export const { getMovies, getMoviesSuccess, getMoviesFailure } = movieSlice.actions;

export default movieSlice.reducer;