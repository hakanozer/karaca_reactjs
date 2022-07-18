import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductItem from './components/ProductItem'
import { ProBilgiler } from './models/IProduct'
import { allProduct } from './Service'

function Dashboard() {

  const [arr, setArr] = useState<ProBilgiler[]>([])

  useEffect(() => {
    toast.loading("Loading...")
    setTimeout(() => {
      fncAllPro()
    }, 1000);

  }, [])

  const fncAllPro = () => {
    allProduct().then(res => {
      setArr( res.data.Products[0].bilgiler )
    }).catch( error => {
      toast.error( error.message )
    }).finally(() => {
      toast.dismiss()
    })
  }
  


  return (
    <>
      <h1>All Product</h1>
      <div className='row'>
        { arr.map( (item, index) => 
          <div className='col-sm-4' key={index}>
            <ProductItem pro={item} />
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard