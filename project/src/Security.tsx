import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import { control } from './Util'

function Security( item : { component: JSX.Element } ) {

  const user = control()

  return (
        user
        ?
        <><Header bilgiler={user} />{item.component}</>
        :
        <Navigate to='/' />
  )
}

export default Security