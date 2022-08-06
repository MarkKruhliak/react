import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {MovieReducer, UserReducer} from "../slices";

const reducers = combineReducers({
    UserReducer,
    MovieReducer
})

export const SetUpStore = () => configureStore({
    reducer: reducers
});
