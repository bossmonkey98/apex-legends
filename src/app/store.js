import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import postReducer from "../features/postSlice"
import usersReducer from '../features/userSlice'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer,
        users: usersReducer,
    },
})