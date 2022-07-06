import React from 'react'
import { NavLink } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import { links } from './LinkData'

function Dashboard() {

  const fncRefresh = () => {
    window.location.reload()
  }

  return (
    <>
        <NavMenu/>
        <h2>Dashboard</h2>
        <button onClick={fncRefresh}>Refresh</button>
        { links.map( (item, index) => 
           <li key={index}> <NavLink to='/'> { item.title } </NavLink> </li> 
        )}
    </>
    
  )
}

export default Dashboard