import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert, AccountCircleOutlined } from '@material-ui/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteUserPost, editUserPost, } from '../services/postService'

export default function BasicMenu({ postMod, userId, postId }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { _id } = JSON.parse(localStorage.getItem("user"))
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
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                /> :
                <AccountCircleOutlined
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
            }

            {postMod ?
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {userMods ? <>
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <BookmarkIcon /> Save
                        </MenuItem>
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <EditIcon /> Edit
                        </MenuItem>
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                            dispatch(deleteUserPost(postId))
                        }}>
                            <DeleteForeverIcon /> Delete
                        </MenuItem>
                    </> :
                        <MenuItem className='menuitem' onClick={() => {
                            setAnchorEl(null);
                        }}>
                            <BookmarkIcon /> Save
                        </MenuItem>
                    }
                </Menu> :
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
                            Profile
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
