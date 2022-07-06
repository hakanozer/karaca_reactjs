import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'

function NavMenu() {
  
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser>()
  useEffect(() => {
    const stItem = localStorage.getItem("user")
    if ( stItem ) {
     try {
      const user:IUser = JSON.parse(stItem)
      setUser( user )
     } catch (error) {
      localStorage.removeItem("user")
     }
    }
  }, [])
  
  const fncLogOut = () => {
    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    navigate("/" )
  }


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className='nav-link' to='/' >Login</NavLink> 
            </li>
            <li className="nav-item">
            <NavLink  className='nav-link'  to='/dashboard' >Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <a className='nav-link' >{ user?.name } - { user?.email }</a>
            </li>
            <li className="nav-item">
              <div onClick={fncLogOut} className='nav-link' role='button' > Logout </div>
            </li>
        </ul>
        </nav>
        
    </>
  )
}

export default NavMenu