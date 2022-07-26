import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdata } from "../utils/api";

const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (_, thunkAPI) => {
        try {
            const res = await fetchdata("get", "users")
            return res.data.users
        } catch (err) {
            thunkAPI.rejectWithValue(err.respone.data)
        }
    }
)

const fetchUser = createAsyncThunk(
    "users/fetchUser",
    async (userId, thunkAPI) => {
        try {
            const res = await fetchdata("get", `users/id/${userId}`, false)
            return res.data.users
        } catch (err) {
            thunkAPI.rejectWithValue(err.respone.data)
        }
    }
)

const fetchUserHandler = createAsyncThunk(
    "users/fetchUserHandler",
    async (userHandler, thunkAPI) => {
        try {
            const res = await fetchdata("get", `users/handler/${userHandler}`, false)
            return res.data.user
        } catch (err) {
            thunkAPI.rejectWithValue(err.respone.data)
        }
    }
)


export {
    fetchAllUsers,
    fetchUser,
    fetchUserHandler,
}