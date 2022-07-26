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
import { UserProf } from '../Avatar';
import { CommentInput, Comments } from './Comment';




const PostCard = ({ post, users }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(undefined);
  const [showComments, setShowComments] = useState(false)
  const [edit, setedit] = useState(false)
  return (
    <div className='post card'>
      <header className='post-header'>
        <UserProf username={post.username} users={users} />
        <div style={{ cursor: 'pointer' }}>
          <DdMenu userId={post.userId} postMod={true} postId={post._id} />
        </div>
      </header>
      <section className='container'>
        {post.content && <p>{post.content}</p>}
        {post.pic && <img id='img' src={post.pic} alt="" />}
      </section>
      <section className='post-footer'>
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
          <CommentIcon className='ico'
            onClick={() => setShowComments(!showComments)}
          /> {post.comments.length}
        </div>
      </section>
      {
        showComments &&
        <section className='comment-sec'>
          <div className='comment-inp'>
            <p>Add Comment</p>
            <CommentInput postId={post._id} />
          </div>
          <div className='all-comments'>
            {
              post.comments.map((cmt) => <Comments cmt={cmt} postId={post._id} />)
            }
          </div>
        </section>
      }
    </div>
  )
}

export default PostCard