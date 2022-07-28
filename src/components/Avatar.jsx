import React from 'react'
import Avatar from '@mui/material/Avatar';

export const UserProf = ({ username, users, }) => {
    var user
    if (Array.isArray(users)) {
        user = users.find((i) => i.username === username)
    } else {
        user = users
    }
    return (
        <section className='avatar-container'>
            {user ? <div className='avatar'>
                {
                    user.pic ?
                        <Avatar id='img' src={user.pic} alt="img" />
                        : <Avatar
                            sx={{ background: 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)' }}
                        >
                            {username[0].toUpperCase() + username[1].toUpperCase()}
                        </Avatar>
                }
            </div> : 'Loading..'}
            <span>{username}</span>
        </section>
    )
}
