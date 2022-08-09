import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieService} from "../services";


export const getAllMovies = createAsyncThunk(
    "MovieSLice/getAllMovies",
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
            oneMovie: []
        },
        reducers: {
            Filter: ((state, action) => {
                state.movies = state.movies.filter(value => value.username.toUpperCase().includes(action.payload.toUpperCase()))
            })
        },
        extraReducers: {
            [getAllMovies.fulfilled]: (state, action) => {
                state.movies = action.payload
            },
            [GetOneMovie.fulfilled]: (state, action) => {
                state.oneMovie = action.payload
            }
        }
    }
);

export const MovieReducer = MovieSlice.reducer;
export const FilterArray = MovieSlice.actions.Filter;

