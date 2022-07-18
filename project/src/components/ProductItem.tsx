import React from 'react'
import { ProBilgiler } from '../models/IProduct'

function ProductItem( item: { pro: ProBilgiler } ) {
  return (
    <>
    <div className="card">
        <img src={ item.pro.images[0].normal } className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ item.pro.productName }</h5>
            <p className="card-text"> { item.pro.brief } </p>
            <a href="#" className="btn btn-primary"><i className="bi bi-cart-plus"></i> Add Basket</a>
        </div>
    </div>  
    </>
  )
}

export default ProductItem