import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'

function LoginComponent() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSend = ( evt: React.FormEvent ) => {
        evt.preventDefault()
        if ( email === "ali@mail.com" && password === "12345" ) {
            const item: IUser = {
                name: 'Erkan',
                email: 'erkan@mail.com',
                age: 30
            }
            localStorage.setItem("user", JSON.stringify(item) )
            sessionStorage.setItem("user", JSON.stringify(item))
            navigate("/dashboard", { state: item })
        }
    }


  return (
    <>
            <form onSubmit={formSend}>
            <div className='mt-3'>
                <input onChange={(evt) => setEmail( evt.target.value ) } className='form-control' placeholder='E-Mail'></input>
            </div>
            <div className='mt-3'>
                <input type='password' onChange={(evt) => setPassword( evt.target.value ) } className='form-control' placeholder='Password'></input>
            </div>
            <button type='submit'>Send Form</button>
        </form>
    </>
  )
}

export default LoginComponent