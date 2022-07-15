import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdata } from "../utils/api";


const fetchAllPosts = createAsyncThunk(
    "posts/fetchAllPosts",
    async (_, thunkAPI) => {
        try {
            const res = await fetchdata("get", "posts")
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const fetchUserFeed = createAsyncThunk(
    "posts/fetchUserFeed",
    async (username, thunkAPI) => {
        try {
            const res = await fetchdata("get", `posts/user/${username}`, true)
            return res.data.posts;
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const fetchUserPost = createAsyncThunk(
    "post/fetchUserPost",
    async (postId, thunkAPI) => {
        try {
            const res = await fetchdata("get", `posts/${postId}`, true)
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const fetchPostWithLimit = createAsyncThunk(
    "post/fetchPostWithLimit",
    async (limit, page) => {
        try {
            const res = await fetchdata("get", `/posts/${limit}/${page}`, false)
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err,res.data)    
        }
    }
)

const createUserPost = createAsyncThunk(
    "posts/createUserPost",
    async (postdata, thunkAPI) => {
        try {
            const res = await fetchdata("post", `api/posts`, true, { postdata })
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const editUserPost = createAsyncThunk(
    "post/createUserPost",
    async (postId, postdata, thunkAPI) => {
        try {
            const res = await fetchdata("post", `posts/edit/${postId}`, true, { postdata })
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const deleteUserPost = createAsyncThunk(
    "posts,deleteUserPost",
    async (postId, thunkAPI) => {
        try {
            const res = await fetchdata("delete", `posts/${postId}`, true)
            return res.data.posts
        } catch (err) {
            console.log(err)
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const likeUserPost = createAsyncThunk(
    "posts/likeUserPost",
    async (postId, thunkAPI) => {
        try {
            const res = await fetchdata("post", `posts/like/${postId}`, true)
            console.log(res)
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

const dislikeUserPost = createAsyncThunk(
    "post/dislikeUserPost",
    async (postId, thunkAPI) => {
        try {
            const res = await fetchdata("post", `posts/dislike/${postId}`, true)
            return res.data.posts
        } catch (err) {
            thunkAPI.rejectWithValue(err, res.data)
        }
    }
)

export {
    fetchAllPosts,
    fetchUserPost,
    fetchUserFeed,
    fetchPostWithLimit,
    deleteUserPost,
    editUserPost,
    likeUserPost,
    dislikeUserPost,
    createUserPost,
}