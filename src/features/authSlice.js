import { createSlice } from "@reduxjs/toolkit"
import { notify } from "../utils"
import {login, signup} from "../services/authService"

const initialState = {
    status: "idle",
    user: JSON.parse(localStorage.getItem("user")) ?? [],
    isLoggedIn: JSON.parse(localStorage?.getItem("login")) || false,
    token:JSON.parse(localStorage.getItem("token")),
    error: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            notify(`Goodbye, ${state.user.user.firstname}`, "success");
            state.status = "loggedOut";
            localStorage.removeItem("user");
            localStorage.removeItem("login");
            logcalStorage.removeItem("token")
            state.error = null;
            state.user = null;
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = "loading";
        },
        [login.fulfilled]: (state, action) => {
            state.status = "success"
            state.user = action.payload?.foundUser
            state.isLoggedIn= true
            localStorage.setItem("user", JSON.stringify(action.payload?.foundUser))
            localStorage.setItem("login", true)
            localStorage.setItem("token", JSON.stringify(action.payload?.encodedToken))
            notify(`Welcome ${action.payload.foundUser.firstname}`)
        },
        [login.rejectedjected]: (state, action) => {
            state.status = "failed"
            notify(action.payload,"error")
        },
        [signup.pending]: (state) => {
            state.status = "loading";
        },
        [signup.fulfilled]: (state, action) => {
            state.status = "success"
            state.user = action.payload?.createdUser
            state.isLoggedIn= true
            localStorage.setItem("user", JSON.stringify(action.payload?.createdUser))
            localStorage.setItem("login", true)
            localStorage.setItem("token", JSON.stringify(action.payload?.encodedToken))
            notify(`Welcome ${action.payload.createdUser.firstname}`)
        },
        [signup.rejectedjected]: (state, action) => {
            state.status = "failed"
            notify(action.payload,"error")
        },

    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;