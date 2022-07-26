import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdata } from "../utils/api";

const fetchComments = createAsyncThunk(
    'fetchComments',
    async (postId, thunkAPI) => {
        try {
            const res = await fetchdata('get', `comments/${postId}`, false)
            return res.data.comments
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

const addComment = createAsyncThunk(
    'addComment',
    async ({ postId, commentData }, thunkAPI) => {
        try {
            const res = await fetchdata('post', `comments/add/${postId}`, true, { commentData })
            return res.data.posts
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

const editComment = createAsyncThunk(
    'editComment',
    async ({ postId, commentData, commentId }, thunkAPI) => {
        try {
            const res = await fetchdata('post', `comments/edit/${postId}/${commentId}`, true, { commentData })
            return res.data.posts
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

const deleteComment = createAsyncThunk(
    'deleteComment',
    async ({ postId, commentId }, thunkAPI) => {
        try {
            const res = await fetchdata('delete', `comments/delete/${postId}/${commentId}`, true)
            return res.data.posts
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

const likeComments = createAsyncThunk(
    'fetchComments',
    async ({ postId, commentId }, thunkAPI) => {
        try {
            const res = await fetchdata('post', `comments/upvote/${postId}/${commentId}`, true)
            return res.data.posts
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export {
    addComment,
    fetchComments,
    deleteComment,
    editComment,
    likeComments,
}