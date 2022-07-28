import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProBilgiler } from '../models/IProduct'
import { addBasketOrder, allOrders } from '../Service'
import { EOrder } from '../useRedux/EOrder'
import { OrderAction } from '../useRedux/OrderReducer'
import { control } from '../Util'

function ProductItem( item: { pro: ProBilgiler } ) {

  const dispatchOrder = useDispatch()

  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate( "/detail/"+item.pro.productId, { state: item.pro } )
  }

  const addBasket = () => {
    const bilgi = control()
    addBasketOrder(bilgi!.userId, item.pro.productId).then( res => {
      console.log( res )
      setTimeout(() => {
          //window.location.reload()
          allOrders(bilgi!.userId).then( resOrder => {
            const orderArr = resOrder.data.orderList[0]
            console.log( orderArr )
            const orderAction:OrderAction = {
              type: EOrder.ORDER_LIST,
              payload: orderArr
            }
            dispatchOrder(orderAction)
          })
      }, 3000);
    } ).catch( error => {
      console.error( "addBasket" +  error.message ) 
    })
  }

  return (
    <>
    <div  className="card" role='button'>
        <img onClick={gotoDetail} src={ item.pro.images[0].normal } className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ item.pro.productName }</h5>
            <p className="card-text"> { item.pro.brief } </p>
            <a onClick={ addBasket } role='button' className="btn btn-primary"><i className="bi bi-cart-plus"></i> Add Basket</a>
        </div>
    </div>  
    </>
  )
}

export default ProductItem