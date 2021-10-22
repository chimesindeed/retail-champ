import React, {useContext} from 'react'
import {SoftcoverPriceContext} from '../../../../../../Context/contextObjects'

const softcover = 'Softcover'

export const Price = () => {
    const [softcoverPrice]= useContext(SoftcoverPriceContext)
    return (
        <div className="books-item-and-price">
          <div className="softcover">{softcover}</div>
          <div className="prices">{softcoverPrice}</div>
        </div>
    )
}