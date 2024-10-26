
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

export const updateMovieAsync = createAsyncThunk("movies/updateMovie", async(movieData) => {
    const response = await axios.put(`${BASE_URI}/${movieData._id}`, movieData)
    return response.data;
})

export const deleteMovieAsync = createAsyncThunk("movies/deleteMovie", async (movieId) => {
    await axios.delete(`${BASE_URI}/${movieId}`)
    return movieId
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
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
        builder.addCase(updateMovieAsync.fulfilled, (state, action) => {
            const index = state.movies.findIndex((movie) => movie._id === action.payload._id)
            if(index !== -1) {
                state.movies[index] = action.payload
            }
        })
        builder.addCase(deleteMovieAsync.fulfilled, (state, action) => {
            state.movies = state.movies.filter((movie)=> movie._id !== action.payload)
        })
    }
})