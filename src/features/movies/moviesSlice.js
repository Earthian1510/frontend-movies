
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URI = 'https://backend-movies-gamma.vercel.app/movies'

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get(BASE_URI);
    return response.data;
})

export const addMovieAsync = createAsyncThunk('movies/addMovie', async (movieData) => {
    const response = await axios.post(BASE_URI, movieData)
    return response.data 
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        state: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'Loading'
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = 'success',
            state.movies = action.payload
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = 'error',
            state.error = action.payload.message
        })
        builder.addCase(addMovieAsync.fulfilled, (state, action) => {
            state.movies.push(action.payload)
        })
    }
})