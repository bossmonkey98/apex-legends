import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FileUploader } from './FileUploader';
import { Send } from '@mui/icons-material';
import { createUserPost, editUserPost } from '../../services/postService'
import { useLocation, useNavigate } from 'react-router-dom'


export const CreatePost = ({ pic, content, postId }) => {
    const dispatch = useDispatch()
    const { username, _id } = JSON.parse(localStorage.getItem("user"))
    const [postData, setPostData] = useState({ content: content, pic: pic, userId: _id })
    const location = useLocation()
    const navigator = useNavigate()

    return (
        <div className='create post'>
            <section className='new-content'>
                <textarea
                    className='post-text'
                    placeholder={`Hello ${username}, What's On Your Mind`}
                    value={postData.content}
                    onChange={(e) => {
                        e.preventDefault();
                        setPostData({ ...postData, content: e.target.value });
                    }}
                />
                {postData.pic &&
                    <div className='previewpic' >
                        <img id='img' src={postData.pic} alt='preview' />
                    </div>
                }
            </section>
            <footer className='new-footer'>
                <FileUploader func={{ postData, setPostData }} />
                <Send className='ico' onClick={() => {
                    if (location.pathname === '/') {
                        dispatch(createUserPost(postData))
                    }
                    else {
                        dispatch(editUserPost({ postId, postData }))
                        navigator('/')
                    }
                }} />
            </footer>
        </div>
    )
}
