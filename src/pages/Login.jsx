import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../styles/auth.css"
import { guestCred, initialLoginCred } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../services/authService"


const Login = () => {
  const [loginCred, setloginCred] = useState(initialLoginCred)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <div className='auth'>
      <form className='auth-form'
        onSubmit={
          (e) => {
            e.preventDefault()
            dispatch(login(loginCred))
          }}>
        <img src={logo} alt="logo" className='logo animate__animated animate__backInDown' />
        <TextField id="outlined-basic"
          label="Enter Username"
          variant="outlined"
          size='small'
          value={loginCred.username}
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault();
              setloginCred({ ...loginCred, username: e.target.value })
            }}
          required
        />

        <TextField id="outlined-basic"
          type="password"
          label="Enter Password"
          variant="outlined"
          size='small'
          value={loginCred.password}
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault();
              setloginCred({ ...loginCred, password: e.target.value })
            }}
          required
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth
        >
          Login
        </Button>
        <Button
          variant='outlined'
          fullWidth
          onClick={() =>
            setloginCred(guestCred)}
        >
          Login as Guest
        </Button>
        <div>
          Doesn't have an account?
          <Link to="/signup" style={
            {
              color: "royalblue",
              margin: "0 5px",
              fontWeight: "600"
            }}
          >Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login