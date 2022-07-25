import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProBilgiler } from '../models/IProduct'
import { addBasketOrder } from '../Service'
import { control } from '../Util'

function ProductItem( item: { pro: ProBilgiler } ) {

  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate( "/detail/"+item.pro.productId, { state: item.pro } )
  }

  const addBasket = () => {
    const bilgi = control()
    addBasketOrder(bilgi!.userId, item.pro.productId).then( res => {
      window.location.reload()
    } )
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