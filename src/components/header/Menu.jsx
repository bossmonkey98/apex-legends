import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Favorite, Home, AccountCircleOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Icons = ({ to, icon }) => {
    return (
        <NavLink to={to} activeClassName = "active" >
            {icon}
        </NavLink>
    )
}

const Menu = ({ theme }) => {
    const { mode, setMode } = theme
    const data = [{
        to: "/feed",
        icon: <Home />
    },
    {
        to: "/saved",
        icon: <Favorite />

    },
    {
        to: "/profile",
        icon: <AccountCircleOutlined />

    }]
    return (
        <>
            {data.map((i) => <Icons key={i.id} to={i.to} icon={i.icon} />)}
            <div style={{cursor:'pointer'}}>
                {mode === 'light' ?
                    <LightModeIcon onClick={() => setMode('dark')} /> :
                    <DarkModeIcon onClick={() => setMode('light')} />
                }
            </div>
        </>

    )
}

export default Menu