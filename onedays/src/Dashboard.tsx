import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import { links } from './LinkData'
import { IUser } from './models/IUser'

function Dashboard() {

  const [user, setUser] = useState<IUser>()
  const navigate = useNavigate()
  const loc = useLocation()
  useEffect(() => {
    if ( loc.state === null ) {
      navigate("/")
    }
    try {
      const itm:IUser = loc.state as IUser
      setUser( itm )
    } catch (error) {
      navigate("/")
    }

  }, [])
  

  const fncRefresh = () => {
    window.location.reload()
  }

  return (
    <>
        <NavMenu/>
        <h2>Dashboard - { user?.name }</h2>
        <button onClick={fncRefresh}>Refresh</button>
        { links.map( (item, index) => 
           <li key={index}> <NavLink to={'/detail/'+item.id} > { item.title } </NavLink> </li> 
        )}
    </>
    
  )
}

export default Dashboard