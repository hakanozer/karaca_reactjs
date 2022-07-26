import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import ProductItem from './components/ProductItem'
import { ProBilgiler } from './models/IProduct'
import { allProduct } from './Service'

function Dashboard() {

  const searchRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState("")
  const [arr, setArr] = useState<ProBilgiler[]>([])
  const [oldArr, setOldArr] = useState<ProBilgiler[]>([])

  useEffect(() => {
    searchRef.current?.focus()
    toast.loading("Loading...")
    setTimeout(() => {
      fncAllPro()
    }, 1000);

  }, [])

  const fncAllPro = () => {
    allProduct().then(res => {
      setArr( res.data.Products[0].bilgiler )
      setOldArr( res.data.Products[0].bilgiler )
    }).catch( error => {
      toast.error( error.message )
    }).finally(() => {
      toast.dismiss()
    })
  }
  

useEffect(() => {
  
  const newArr = oldArr.filter( item => item.productName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.brief.toLocaleLowerCase().includes( search.toLocaleLowerCase() ) )
  setArr(newArr)

}, [search])



  return (
    <>
    <Helmet>
      <title>Product List</title>
      <meta name="description" content="Product App" />
    </Helmet>
      <div className='mb-3 mt-3'>
        <input onChange={(evt) => setSearch(evt.target.value)} ref={searchRef} className='form-control' type='search' placeholder='Search..'></input>
      </div>
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