import { createSlice } from "@reduxjs/toolkit"
import {
    fetchAllUsers,
    fetchUser,
    fetchUserHandler,
} from '../services/usersService'
import { notify } from "../utils"

const initialState = {
    users: [],
    isLoading:false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllUsers.pending]: (state) => {
            state.isLoading= true
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        },
        [fetchAllUsers.rejected]: () => {
            notify("unable to fetch users","error")
        },
        [fetchUser.pending]: (state) => {
            state.isLoading= true
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        },
        [fetchUser.rejected]: () => {
            notify("unable to fetch users","error")
        },
        [fetchAllUsers.pending]: (state) => {
            state.isLoading= true
        },
        [fetchUserHandler.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        },
        [fetchUserHandler.rejected]: () => {
            notify("unable to fetch user","error")
        },
    }
})

export default userSlice.reducer