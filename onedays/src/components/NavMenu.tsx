import React from 'react'
import { NavLink } from 'react-router-dom'

function NavMenu() {
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
        </ul>
        </nav>
        
    </>
  )
}

export default NavMenu