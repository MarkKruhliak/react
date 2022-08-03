import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "../slices";

const reducers = combineReducers({
    UserReducer
})

export const SetUpStore = () => configureStore({
    reducer: reducers
});
