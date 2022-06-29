import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdata} from "../utils/api"

export const login = createAsyncThunk("auth/login",
    async (
        loginCred,thunkAPI) => {
        try {
            const { username, password } = loginCred 
            const res = await fetchdata(
                "post",
                "auth/login",
                false,
                { username, password })
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue("email or password is incorrect")
        }
    })

export const signup = createAsyncThunk("auth/signup",
    async (signUpCred, thunkAPI) => {
        try {
            const { firstname, lastname, username, password } = signUpCred;
            const res = await fetchdata("post", "auth/signup", false, {
                firstname,
                lastname,
                username,
                password,
            });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue("username exists");
        }
    }
);
