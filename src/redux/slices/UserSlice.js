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
           state.users = state.users.filter(value => value.id !== action.payload.data.id)
        })
    }

});

export const UserReducer = UserSlice.reducer;

export const addUser = UserSlice.actions.addUser;
export const deleteUser = UserSlice.actions.addUser;
