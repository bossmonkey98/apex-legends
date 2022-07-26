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
import {
    addComment,
    fetchComments,
    deleteComment,
    editComment,
    likeComments,
} from "../services/commentService"
import { notify } from "../utils"

const initialState = {
    isLoading: "true",
    allposts: [],
    comments: [],
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
            state.isLoading = false
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
            state.isLoading = false
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
            state.isLoading = false
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
            state.isLoading = false
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
            state.isLoading = false
            notify('post edited successfully')
        },
        [editUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify("Oops! unable to edit post", "error")
        },
        [deleteUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [deleteUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
            notify('post deleted successfully')
        },
        [deleteUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify("Oops! unable to delete post", "error")
        },
        [createUserPost.pending]: (state) => {
            state.isLoading = true
        },
        [createUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
            notify('post added successfully')
        },
        [createUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify("Oops! unable to add post", "error")
        }
        , [likeUserPost.pending]: (state) => {
            return
        },
        [likeUserPost.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
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
            state.isLoading = false
        },
        [dislikeUserPost.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify(state.error, "error")
        },
        [fetchComments.pending]: (state) => {
            return
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload
            state.isLoading = false
        },
        [fetchComments.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify('error loading comments', "error")
        },
        [addComment.pending]: (state) => {
            return
        },
        [addComment.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
            notify('comment added successfully')

        },
        [addComment.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify('Oops! unable to add comments', "error")
        },
        [deleteComment.pending]: (state) => {
            return
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
            notify('comment deleted successfully')

        },
        [deleteComment.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify('Oops! error in deleting comments', "error")
        },
        [editComment.pending]: (state) => {
            return
        },
        [editComment.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
            notify('comment edited successfully')
        },
        [editComment.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify('Oops! error in editing comments', "error")
        },
        [likeComments.pending]: (state) => {
            return
        },
        [likeComments.fulfilled]: (state, action) => {
            state.allposts = action.payload
            state.isLoading = false
        },
        [likeComments.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
            notify('Oops! unable to like comment', "error")
        },
    }
})

export default postSlice.reducer