import { ThumbDownAltOutlined, ThumbUpAltOutlined, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material'
import CommentIcon from '@mui/icons-material/Comment';
import DdMenu from '../DDMenu';
import React from 'react'
import {
  likeUserPost,
  dislikeUserPost,
} from '../../services/postService'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const PostCard = ({ post }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(undefined);
  return (
    <div className='post card'>
      <header className='post-header'>
        {post.username}
        <div className='' style={{ cursor: 'pointer' }}>
          <DdMenu userId={post.userId} postMod={true} postId={post._id} />
        </div>
      </header>
      <section className='container'>
        <img src={post.pic} id='img' alt="img" />
      </section>
      <footer className='post-footer'>
        {like === undefined ? <>
          <div>
            <ThumbUpAltOutlined className='ico'
              onClick={() => {
                dispatch(likeUserPost(post._id))
                setLike(true)
              }}
            /> {post.likes.likeCount}
          </div>
          <div>
            <ThumbDownAltOutlined className='ico'
              onClick={() => {
                dispatch(dislikeUserPost(post._id))
                setLike(false)
              }} />
          </div>
        </> :
          like === true ? <>
            <div>
              <ThumbUpAlt className='icon'
              /> {post.likes.likeCount}
            </div>
            <div>
              <ThumbDownAltOutlined className='ico'
                onClick={() => {
                  dispatch(dislikeUserPost(post._id))
                  setLike(false)
                }} />
            </div>
          </>
            : <>
             <div>
              <ThumbUpAltOutlined className='ico'
                  onClick={() => {
                    dispatch(likeUserPost(post._id))
                    setLike(true)
                }}
              /> {post.likes.likeCount}
            </div>
            <div>
              <ThumbDownAlt className='icon' />
            </div>
            </>
        }
        <div>
          <CommentIcon className='ico' /> {post.comments.length}
        </div>
      </footer>
    </div>
  )
}

export default PostCard