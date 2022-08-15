import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png"
import { initialSignUpCred } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from "../services/authService"


const Signup = () => {
  const [signUpCred, setsignUpCred] = useState(initialSignUpCred)
  const {isLoggedIn} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);
  
  return (
    <div className='auth page'>
      <form className='auth-form' id='signup' onSubmit={
        (e) => {
          e.preventDefault()
          dispatch(signup(signUpCred))
        }
      } >
        <img src={logo} alt="logo" className='logo animate__animated animate__backInDown' />
        <TextField id="outlined-basic"
          label="Enter First Name"
          variant="outlined"
          size='small'
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault()
              setsignUpCred({ ...signUpCred, firstname: e.target.value })
            }}
          required
        />
        <TextField id="outlined-basic"
          label="Enter Last Name"
          variant="outlined"
          size='small'
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault()
              setsignUpCred({ ...signUpCred, lastname: e.target.value })
            }}
          required
        />
        <TextField id="outlined-basic"
          label="Enter Username"
          variant="outlined"
          size='small'
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault()
              setsignUpCred({ ...signUpCred, username: e.target.value })
            }}
          required
        />
        <TextField id="outlined-basic"
          type="password"
          label="Enter Password"
          variant="outlined"
          size='small'
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault()
              setsignUpCred({ ...signUpCred, password: e.target.value })
            }}
          required
        />
        <TextField id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          size='small'
          fullWidth
          style={{ background: "var(--bgc-2)" }}
          onChange={
            (e) => {
              e.preventDefault()
              setsignUpCred({ ...signUpCred, confirmPassword: e.target.value })
            }}
          required
        />
        <Button
          className='btn-grad'
          type='submit'
          variant='contained'
          fullWidth
        >
          Sign Up
        </Button>
        <div>
          Already have an account?
          <Link to="/" style={
            {
              color: "royalblue",
              margin: "0 5px",
              fontWeight: "600"
            }}
          >Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup