import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import NavMenu from './components/NavMenu'
import { userArr, users } from './Data'
import { IUser } from './models/IUser'


function Login() {

  const [stateArr, setStataArr] = useState<IUser[]>(userArr)



  const fncAddArr = () => {
    const item: IUser = {
        name: 'Erdal',
        email: 'erdal@mail.com'
    }
    const newArr = Object.assign([], stateArr )
    newArr.push( item )
    setStataArr( newArr )
  }



  useEffect(() => {
    console.log( "call -2 " )
  }, [])
  


  return (
    <>
        <NavMenu/>
        <LoginComponent/>
        
        <button onClick={ fncAddArr }>Add</button>
        { users.map( (item, index) => 
            <li key={index} > { item } </li>
        )}
        <hr />
        { stateArr.map(( item, index ) => 
            {
                item.age = 10
                return (
                    <li key={index}> { item.name } - { item.email } - { item.age.toFixed() } </li>
                )
            }
        )}
    </>
  )

}
export default Login
