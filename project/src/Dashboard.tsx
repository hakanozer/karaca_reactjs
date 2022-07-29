import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import ProductItem from './components/ProductItem'
import { ProBilgiler } from './models/IProduct'
import { allProduct } from './Service'
import { allFnc } from './UsePromise'
import $ from 'jquery';

import styled, { keyframes } from 'styled-components';
import { bounce, fadeInUp } from 'react-animations';
import { DataContext, IData } from './AppContext'
const bounceAnimation = keyframes`${fadeInUp}`;
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

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
      setTimeout(() => {
        //$("#allProduct").slideToggle()
      }, 3000);
    }).catch( error => {
      toast.error( error.message )
    }).finally(() => {
      toast.dismiss()
    })
  }
  

useEffect(() => {
  
  allFnc()
  const newArr = oldArr.filter( item => item.productName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.brief.toLocaleLowerCase().includes( search.toLocaleLowerCase() ) )
  setArr(newArr)

}, [search])


  //use Context
  const { itemVal, setItem } = useContext(DataContext)
  const newItem:IData = {
    name: 'Serkan',
    age: 45
  }
  useEffect(() => {
    setItem( newItem )
  }, [])
  

  return (
    <>
    
    <div style={{ height: 50, }}></div>
    <Helmet>
      <title>Product List</title>
      <meta name="description" content="Product App" />
    </Helmet>
      <BouncyDiv>
        <div className='mb-3 mt-3'>
          <input onChange={(evt) => setSearch(evt.target.value)} ref={searchRef} className='form-control' type='search' placeholder='Search..'></input>
        </div>
      </BouncyDiv>
      <p> Context: { itemVal.name } { itemVal.age } </p>
      <div className='row' id='allProduct'>
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