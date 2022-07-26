import { createSlice } from "@reduxjs/toolkit"
import { notify } from "../utils"
import { login, signup } from "../services/authService"


const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem("user")) ?? [],
    isLoggedIn: JSON.parse(localStorage?.getItem("login")) || false,
    token: JSON.parse(localStorage.getItem("token")),
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            notify(`Goodbye, ${state.user.username}`, "success");
            localStorage.removeItem("login");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            state.isLoggedIn=false
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload?.foundUser
            state.isLoggedIn = true
            delete action.payload.foundUser.password
            localStorage.setItem("user", JSON.stringify(action.payload?.foundUser))
            localStorage.setItem("login", true)
            localStorage.setItem("token", JSON.stringify(action.payload?.encodedToken))
            notify(`Welcome ${action.payload.foundUser.username}`);
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            notify(action.payload,"error")
        },
        [signup.pending]: (state) => {
            state.isLoading = true;
        },
        [signup.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload?.createdUser
            state.isLoggedIn = true
            delete action.payload.createdUser.password
            localStorage.setItem("user", JSON.stringify(action.payload?.createdUser))
            localStorage.setItem("login", true)
            localStorage.setItem("token", JSON.stringify(action.payload?.encodedToken))
            notify(`Welcome ${action.payload.createdUser.username}`)
        },
        [signup.rejected]: (state, action) => {
            state.isLoading = false
            notify(action.payload,"error")
        },

    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;