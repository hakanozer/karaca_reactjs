import React, { useEffect, useState } from 'react'

function LoginComponent() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSend = ( evt: React.FormEvent ) => {
        evt.preventDefault()
        console.log( email, password )
    }

  return (
    <>
            <form onSubmit={formSend}>
            <div className='mt-3'>
                <input onChange={(evt) => setEmail( evt.target.value ) } className='form-control' placeholder='E-Mail'></input>
            </div>
            <div className='mt-3'>
                <input onChange={(evt) => setPassword( evt.target.value ) } className='form-control' placeholder='Password'></input>
            </div>
            <button type='submit'>Send Form</button>
        </form>
    </>
  )
}

export default LoginComponent