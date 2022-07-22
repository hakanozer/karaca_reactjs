import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from './models/IUser'

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // send Form
    const fncSend = ( evt: React.FormEvent  ) => {
        evt.preventDefault()
        
        const url = 'https://www.jsonbulut.com/json/userLogin.php'
        const sendParams = {
            ref: "d1becef32825e5c8b0fc1b096230400b",
            userEmail: email,
            userPass: password,
            face: "no"
        }
        axios.get<IUser>(url, { params: sendParams } ).then( res => {
            const user = res.data.user[0]
            if ( user.durum === true ) {
                navigate('/dashboard')
            }else {
                alert( user.mesaj )
            }
        })

    }

  return (
    <>
        <h2>Admin Login</h2>
        <form onSubmit={ fncSend } >
            <input onChange={(evt) => setEmail(evt.target.value) } type='email' placeholder='E-Mail' />
            <input onChange={(evt) => setPassword(evt.target.value) } type='password' placeholder='Password' />
            <input type='submit' value='Send'></input>
        </form>
    </>
  )
}

export default Login