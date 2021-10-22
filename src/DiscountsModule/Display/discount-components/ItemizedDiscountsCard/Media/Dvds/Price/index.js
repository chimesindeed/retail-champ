import React, {useContext} from 'react'
import {DvdsPriceContext} from '../../../../../../Context/contextObjects'

const dvds = 'Dvds'

export const Price = () => {
    const [dvdsPrice]= useContext(DvdsPriceContext)
    return (
        <div className="media-item-and-price">
          <div className="dvds">{dvds}</div>
          <div className="prices">{dvdsPrice}</div>
        </div>
    )
}