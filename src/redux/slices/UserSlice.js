import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserService} from "../services";

export const getAllUsers = createAsyncThunk(
    'UserSLice/getAllUsers',
    async () => {
        return await UserService.getAll()
    }
);

export const getUserById = createAsyncThunk(
    'UserSlice/getUserById',
    async (id) => {
        return await UserService.getUserById(id)
    }
)

const UserSlice = createSlice({
    name: "UserSlice",
    initialState : {
        users: []
    },

    reducers: {
        deleteUser: ((state, action) => {
          state.users =  state.users.filter(user=> user.id !== action.payload)

            console.log(state.users)
        })

    },
    extraReducers : {
        [getAllUsers.fulfilled] : (state , action) => {
            state.users = action.payload
        },
        [getUserById.fulfilled ] : (state, action) => {
            state.users = action.payload
        }
    }

});

export const UserReducer = UserSlice.reducer;


export const deleteUser = UserSlice.actions.deleteUser;


