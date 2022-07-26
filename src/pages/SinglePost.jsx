import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CreatePost } from '../components/post/CreatePost'
import { Loader } from "../components/Loader"

const SinglePost = () => {
    const { postId } = useParams()
    const { allposts } = useSelector((state) => state.posts)
    const post = allposts.find((i) => i._id === postId)

    if (post) {
        return (
            <div className='home page'>
                <CreatePost pic={post.pic} content={post.content} postId ={postId} />
            </div>
        )
    } else {
        return (
            <div className='home page'>
                <Loader />
            </div>
        )
    }
}

export default SinglePost