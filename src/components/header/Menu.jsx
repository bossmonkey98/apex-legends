import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Favorite, Home } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DDMenu from '../DDMenu'

const Icons = ({ to, icon }) => {
    return (
        <NavLink to={to} activeClassName="active" >
            {icon}
        </NavLink>
    )
}

const Menu = ({ theme }) => {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { mode, setMode } = theme
    const data = [{
        to: "/",
        icon: <Home />
    },
    {
        to: "/saved",
        icon: <Favorite />

    },
    ]
    return (
        <>
            <div style={{ cursor: 'pointer' }}>
                {mode === 'light' ?
                    <LightModeIcon onClick={() => setMode('dark')} /> :
                    <DarkModeIcon onClick={() => setMode('light')} />
                }
            </div>
            {isLoggedIn && <>{
                data.map((i) => <Icons key={i.id} to={i.to} icon={i.icon} />)}
                < div style={{ cursor: 'pointer' }}>
                    <DDMenu post={false} />
                </div>
            </>
            }
        </>

    )
}

export default Menu