//
import React, {useContext} from 'react'
import {VHSPriceContext} from '../../../../../../Context/contextObjects'

const vhs = 'Vhs'

export const Price = () => {
    const [vhsPrice]= useContext(VHSPriceContext)
    return (
        <div className="media-item-and-price">
          <div className="vhs">{vhs}</div>
          <div className="prices">{vhsPrice}</div>
        </div>
    )
}