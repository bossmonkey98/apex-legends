import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdata } from "../utils/api";

const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (_, thunkAPI) => {
        try {
            const res = await fetchdata("get", "users")
            return res.data.users
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.error)
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
            thunkAPI.rejectWithValue(err, res.error)
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
            thunkAPI.rejectWithValue(err, res.error)
        }
    }
)


export {
    fetchAllUsers,
    fetchUser,
    fetchUserHandler,
}