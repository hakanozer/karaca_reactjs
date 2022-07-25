import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProBilgiler } from './models/IProduct'

function Detail() {

    const [item, setItem] = useState<ProBilgiler>()
    const [bigIamge, setBigIamge] = useState("")
    const loc = useLocation()
    const { id } = useParams()
    useEffect(() => {
        console.log( id )
        if ( loc.state ) {
            const item = loc.state as ProBilgiler
            setItem( item )
            setBigIamge( item.images[0].normal )
        }
    }, [])
  

  return (
    <>
    { item && 
    <> 
        <h3>{ item?.productName } - { id }</h3>
            <div className='row'>
                <div className='col-sm-6'>
                    <img src={ bigIamge } className="img-fluid" />
                    <div>
                    {
                        item?.images.map( (item, index) => 
                            <img onClick={ (evt) => setBigIamge( item.normal ) } key={index} role='button' src={ item.thumb } className="img-thumbnail m-1" />
                        )
                    }
                    </div>
                </div>
                <div className='col-sm-6'>
                    <p> { item?.brief } </p>
                    <div dangerouslySetInnerHTML={{ __html: item?.description }} /> 
                </div>
            </div>
            </>
        }
    </>
  )


}

export default Detail