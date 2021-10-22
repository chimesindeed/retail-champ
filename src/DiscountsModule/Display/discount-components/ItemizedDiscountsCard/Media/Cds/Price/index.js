//
import React, {useContext} from 'react'
import {CdsPriceContext} from '../../../../../../Context/contextObjects'

const cds = 'Cds'

export const Price = () => {
    const [cdsPrice]= useContext(CdsPriceContext)
    return (
        <div className="media-item-and-price">
          <div className="cds">{cds}</div>
          <div className="prices">{cdsPrice}</div>
        </div>
    )
}