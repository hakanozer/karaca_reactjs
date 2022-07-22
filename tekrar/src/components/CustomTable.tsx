import React from 'react'
import { IPlaceUsers } from '../models/IPlaceUsers'

function CustomTable( item: { arr: IPlaceUsers[] } ) {
  return (
    <table className="tg">
    <thead>

    { item.arr.map( ( item, index ) =>        
    <tr key={index}>
        <th className="tg-1wig"><span> { item.id } </span></th>
        <th className="tg-1wig"><span> { item.name } </span></th>
        <th className="tg-1wig"><span> { item.username } </span></th>
        <th className="tg-1wig"><span> { item.email } </span></th>
        <th className="tg-1wig"> { item.address.city } </th>
        <th className="tg-1wig"><span> { item.phone } </span></th>
        <th className="tg-1wig"><span> { item.website } </span></th>
    </tr>
    )}

    </thead>
    <tbody>
    <tr>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
        <td className="tg-0lax"></td>
    </tr>
    </tbody>
    </table>
    
  )
}

export default CustomTable