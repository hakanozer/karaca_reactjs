import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {

  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
        const cid = parseInt(""+id)
        if ( cid.toString() === 'NaN' ) {
            navigate( '/dashboard' )
        }
  }, [])
  
  

  return (
    <>
        <div>Detail</div>
        <h3> { id } </h3>
    </>
  )
}

export default Detail