import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert } from '@material-ui/icons';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { logout } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteUserPost } from '../services/postService'
import { Avatar } from '@mui/material';

export default function BasicMenu({ postMod, userId, postId }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { username, _id, pic } = JSON.parse(localStorage.getItem("user"))
    const userMods = _id === userId
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    React.useEffect(() => {
        if (!isLoggedIn)
            useNavigate('/login', { replace: true })
    }, [isLoggedIn])

    return (
        <div>
            {postMod ?
                <MoreVert
                    className='ico'
                    id="basic-button"
                    onClick={handleClick}
                /> :
                pic ?
                    <Avatar
                        src={pic}
                        id="img"
                        onClick={handleClick}
                    /> :
                    <Avatar
                        onClick={handleClick}
                        sx={{ background: 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)' }}
                    >
                        {username[0].toUpperCase() + username[1].toUpperCase()}
                    </Avatar>
            }

            {postMod ? <>
                {userMods ?
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <BookmarkIcon className='ico' /> Save
                        </MenuItem>
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <Link to={`/post/${postId}`}>
                                <EditIcon className='ico' /> Edit
                            </Link>
                        </MenuItem>
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                            dispatch(deleteUserPost(postId))
                        }}>
                            <DeleteForeverIcon className='ico' /> Delete
                        </MenuItem>
                    </Menu>
                    :
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <BookmarkIcon className='ico' /> Save
                        </MenuItem>
                    </Menu>
                }</> :
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className='menuitem' onClick={() => {
                        setAnchorEl(null);
                    }}>
                        <NavLink to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            {username}
                        </NavLink>
                    </MenuItem>
                    <MenuItem className='menuitem' onClick={() => {
                        setAnchorEl(null);
                        dispatch(logout())
                    }}>
                        Logout
                    </MenuItem>
                </Menu>
            }
        </div>
    );
}
