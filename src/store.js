import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./features/movies/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})

export default store;