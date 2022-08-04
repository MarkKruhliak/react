import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserService} from "../services";

export const getAllUsers = createAsyncThunk(
    'UserSLice/getAllUsers',
    async () => {
        return await UserService.getAll()
    }
);


const UserSlice = createSlice({
    name: "UserSlice",
    initialState : {
        users: []
    },

    reducers: {
        deleteUser: ((state, action) => {
            state.users =  state.users.filter(value => value.id !== action.payload.id)
            console.log(state.users)
        })

    },
    extraReducers : {
        [getAllUsers.fulfilled] : (state , action) => {
            state.users = action.payload
        }
    }

});

export const UserReducer = UserSlice.reducer;


export const deleteUser = UserSlice.actions.deleteUser;

