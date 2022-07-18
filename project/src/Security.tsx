import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import { Bilgiler } from './models/IUser'
import { decrypt } from './Util'

function Security( item : { component: JSX.Element } ) {

  const control = () : Bilgiler | null => {
    const stSession = sessionStorage.getItem("user")
    if ( stSession ) {
       try {
           const stPlain = decrypt( stSession )
           const user:Bilgiler = JSON.parse( stPlain )
           return user;
       } catch (error) {
           sessionStorage.removeItem("user")
           return null
       }
    }
    return null
  }
  const user = control()

  return (
        user
        ?
        <><Header />{item.component}</>
        :
        <Navigate to='/' />
  )
}

export default Security