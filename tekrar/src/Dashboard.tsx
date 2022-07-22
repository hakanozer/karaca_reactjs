import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomTable from './components/CustomTable';
import { IPlaceUsers } from './models/IPlaceUsers'
import './table.css';

function Dashboard() {

  const [arr, setArr] = useState<IPlaceUsers[]>([])
  const [data, setData] = useState('')  
  useEffect(() => {
    console.log("useEffect - 1", data)
  }, [data])

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get<IPlaceUsers[]>(url).then( res => {
        setArr( res.data )
    })
  }, [])
  


  return (
    <>
        <input onChange={(evt) => setData(evt.target.value) } placeholder="Data" />
        <hr></hr>
        <CustomTable arr={arr} />
    </>
  )
}

export default Dashboard