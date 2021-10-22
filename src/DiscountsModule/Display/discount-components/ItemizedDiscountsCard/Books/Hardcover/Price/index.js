import React, {useContext} from 'react'
import {HardcoverPriceContext} from '../../../../../../Context/contextObjects'

const hardcover = 'Hardcover'

export const Price = () => {
    const [hardcoverPrice]= useContext(HardcoverPriceContext)
    return (
        <div className="books-item-and-price">
          <div className="hardcover">{hardcover}</div>
          <div className="prices">{hardcoverPrice}</div>
        </div>
    )
}