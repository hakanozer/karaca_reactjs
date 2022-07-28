import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { OrderList } from '../models/IOrders'
import { Bilgiler } from '../models/IUser'
import { allOrders } from '../Service'
import { EOrder } from '../useRedux/EOrder'
import { OrderAction } from '../useRedux/OrderReducer'
import { StateType } from '../useRedux/Store'

function Header( item: { bilgiler:Bilgiler } ) {

  const navigate = useNavigate()
  const fncLogOut = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    navigate('/')
  }

  const orderDispatch = useDispatch()
  const orderArr = useSelector( ( item: StateType ) => item.orderReducer )
  //const [orders, setOrders] = useState<OrderList[]>([])
  useEffect(() => {
    allOrders(item.bilgiler.userId).then( res => {
        //setOrders( res.data.orderList[0] )
        const orderAction:OrderAction = {
            type: EOrder.ORDER_LIST,
            payload: res.data.orderList[0]
        }
        orderDispatch(orderAction)
    })
  }, [])
  
  //const noteArr = useSelector( ( item: StateType ) => item.noteReducer )


  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/profile' className='nav-link'>Profile</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/note' className='nav-link'>Note</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a data-bs-toggle="modal" data-bs-target="#exampleModal" className="dropdown-item" role='button' >LogOut</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link "> { item.bilgiler.userName } { item.bilgiler.userSurname } </a>
            </li>
            <li className="nav-item">
            <a className="nav-link "> Basket( { orderArr.length } ) </a>
            </li>
            <li className="nav-item">
            <a className="nav-link ">Not(0)</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Admin Logout</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            Are you sure?
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={ fncLogOut }  className="btn btn-danger"   data-bs-dismiss="modal" >Logout</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header