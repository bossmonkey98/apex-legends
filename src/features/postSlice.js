import { createSlice } from "@reduxjs/toolkit";
import {
    fetchAllPosts,
    fetchUserPost,
    fetchUserFeed,
    fetchPostWithLimit,
    deleteUserPost,
    editUserPost,
    likeUserPost,
    dislikeUserPost,
    createUserPost,
} from "../services/postService"
import { notify } from "../utils"

const initialState = {
    isLoading: "true",
    allposts: [],
    error: null,
};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [fetchAllPosts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllPosts.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [fetchAllPosts.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [fetchUserFeed.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUserFeed.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [fetchUserFeed.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [fetchUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [fetchUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [fetchPostWithLimit.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPostWithLimit.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [fetchPostWithLimit.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [editUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [editUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [editUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [deleteUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [deleteUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [deleteUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [createUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [createUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [createUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        }
        , [likeUserPost.pending]: (state) => {
            return
        },
        [likeUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [likeUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        }
        , [dislikeUserPost.pending]: (state) => {
            return
        },
        [dislikeUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading=false
        },
        [dislikeUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        }
    }
})

export default postSlice.reducer