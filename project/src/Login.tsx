import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userLogin } from './Service'
import { encrypt } from './Util'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const sendForm = ( evt: React.FormEvent ) => {
    evt.preventDefault();
    userLogin(email, password)
    .then( res => {
        const dt = res.data
        const user = dt.user[0]
        const durum = user.durum
        const mesaj = user.mesaj
        if ( durum ) {
            const stBilgiler = JSON.stringify( user.bilgiler )
            sessionStorage.setItem("user", encrypt(stBilgiler) )

            // remember me control
            if ( remember === true ) {
                localStorage.setItem("user", encrypt(stBilgiler) )
            }

            navigate('/dashboard')
        } else {
            toast.error(mesaj)
        }
    })
    .catch( err => {
        toast.error(err.message)
    })
  } 


  return (
    <>
       <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>Admin Login</h2>
                <form onSubmit={ sendForm } >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required onChange={(evt) => setPassword(evt.target.value)}  type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={(evt) => setRemember( !remember )} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
       </div> 
    </>
  )
}

export default Login