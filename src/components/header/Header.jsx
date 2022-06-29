import React from 'react'
import Menu from './Menu'
import Search from './Search'
import logo from '../../assets/logo.png'

const Header = ({ theme }) => {
    return (
        <nav className='navbar'>
            <div className='title'>
                <img src={logo} alt="logo" className='logo animate__animated animate__backInDown' />
            </div>
            <div className='search'>
                <Search />
            </div>
            <div className='menu'>
                <Menu theme={theme} />
            </div>
        </nav>
    )
}

export default Header