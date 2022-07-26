import { MoreVert, Send, ThumbUpOutlined, ThumbUp } from '@mui/icons-material';
import { UserProf } from '../Avatar'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Delete, Edit } from '@material-ui/icons';
import {
    addComment,
    editComment,
    deleteComment,
    likeComments
} from '../../services/commentService'
import { useDispatch } from 'react-redux';

export const CommentInput = ({ postId }) => {
    const [commentData, setCommentData] = React.useState({ comment: '' })
    const dispatch = useDispatch()
    return (
        <div className='comment-ip'>
            <input
                placeholder='type here...'
                onChange={(e) => {
                    e.preventDefault()
                    setCommentData({ ...commentData, comment: e.target.value })
                }} />
            <Send className='ico'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(addComment({ postId, commentData }))
                }} />
        </div>
    )
}

export const Comments = ({ postId, cmt }) => {
    const commentId = cmt._id
    const userId = cmt.user._id
    const dispatch = useDispatch()
    const [like, setLike] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [commentData, setCommentData] = React.useState({ comment: cmt.comment })

    const CommentsMenu = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const { _id } = JSON.parse(localStorage.getItem("user"))
        if (_id === userId) {
            return (
                <div>
                    <MoreVert
                        id="basic-button"
                        className='ico'
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => {
                            setAnchorEl(null);
                            dispatch(deleteComment({ postId, commentId }))
                        }} className='menuitem'>
                            <Delete className='ico' /> Delete
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setAnchorEl(null);
                            setEdit(true)
                            console.log(edit)
                        }} className='menuitem'>
                            <Edit className='ico' /> Edit
                        </MenuItem>
                    </Menu>
                </div >
            );
        }
    }

    return (
        !edit ?
            <div className='comments'>
                <header className='comment-head'>
                    <UserProf username={cmt.user.username} users={cmt.user} id='cmt-avt' />
                    <CommentsMenu />
                </header>
                <section className='cmt'>
                    <p>{cmt.comment}</p>
                </section>
                <footer className='cmt-foot' >
                    {like ? <>
                        <ThumbUp className='icon'
                            onClick={() => {
                                dispatch(likeComments({ postId, commentId }))
                                setLike(!like)
                            }} />{cmt.votes.upvotedBy.length}
                    </> : <>
                        <ThumbUpOutlined className='ico'
                            onClick={() => {
                                dispatch(likeComments({ postId, commentId }))
                                setLike(!like)
                            }} />{cmt.votes.upvotedBy.length}
                    </>
                    }
                </footer>
            </div> : <>
                <UserProf username={cmt.user.username} users={cmt.user} id='cmt-avt' />
                <div className='comment-ip'>
                    <input
                        value={commentData.comment}
                        placeholder='type here...'
                        onChange={(e) => {
                            e.preventDefault()
                            setCommentData({ ...commentData, comment: e.target.value })
                        }} />
                    <Send className='ico'
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(editComment({ postId, commentId, commentData }))
                            setEdit(false)
                        }} />
                </div>
            </>
    )
}
