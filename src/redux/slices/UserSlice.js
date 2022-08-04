import {createSlice} from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: "UserSlice",
    initialState : {
        users: []
    },
    reducers: {
        addUser: ((state, action) => {
            state.users.push(action.payload.data)
        }),
        deleteUser: ((state, action) => {
            state.users = false
        })
    }

});

export const UserReducer = UserSlice.reducer;

export const addUser = UserSlice.actions.addUser;
export const deleteUser = UserSlice.actions.addUser;