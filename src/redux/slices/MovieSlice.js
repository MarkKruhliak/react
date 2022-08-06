import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieService} from "../services";


export const getAllMovies = createAsyncThunk(
    "MovieSLice/getAllMovies",
    async () => {
        return await MovieService.getAll()
    }
);



const MovieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        movies: []
    },
    reducers: {
    },
    extraReducers: {
        [getAllMovies.fulfilled] : (state, action) => {
            state.movies = action.payload
        }
    }

    }

);

export const MovieReducer = MovieSlice.reducer;

