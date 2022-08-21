import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieService} from "../services";


export const getAllMovies = createAsyncThunk(
    "MovieSLice/getAllMovies",
    async () => {
        return await MovieService.getAll()
    }
)

export const getFilteredMovies = createAsyncThunk(
    'MovieSlice/getFilteredMovies',
    async () => {
        return await MovieService.getAll()
    }
);


export const GetOneMovie = createAsyncThunk(
    'MovieSlice/GetOneMovie',
    async (id) => {
        return await MovieService.getOneMovie(id)
    }
);

const MovieSlice = createSlice({
        name: 'MovieSlice',
        initialState: {
            movies: [],
            filteredMovie: [],
            oneMovie: []
        },
        reducers: {},
        extraReducers: {
            [getAllMovies.fulfilled]: (state, action) => {
                state.movies = action.payload
            },
            [getFilteredMovies.fulfilled]: (state, action) => {
                state.filteredMovie = action.payload
                // console.log(state.filteredMovie);
                // console.log(state.filteredMovie);
            },
            [GetOneMovie.fulfilled]: (state, action) => {
                state.oneMovie = action.payload
            }
        }
    }
);

export const MovieReducer = MovieSlice.reducer;

