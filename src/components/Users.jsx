import { PeopleRounded } from '@material-ui/icons'
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

const User = ({ user }) => {
    return (
        <div className='user-card'>
            {user.pic ?
                <img id='img' className='user-img' src={user.pic} alt='img' /> :
                <p className='user-avt'>{user.username[0] + user.username[1]}</p>
            }
            <p>
                {user.username}
            </p>
            <Button
                className='btn-grad'
                variant='contained'
                fullWidth
                size='small'
            >
                Follow
            </Button>
        </div>
    )
}


export const Users = ({ users }) => {
    return (
        <div className='users-container'>
            {users.map((user) => <User key={user.id} user={user} />)}
        </div>
    )
}
