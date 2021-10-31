import React, {useContext} from 'react'
import {DvdsPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const dvds = 'Dvds'
    
    const [dvdsPrice]= useContext(DvdsPriceContext)
    
    const priceFormatter = () => {
    
        let result;

        if (String(dvdsPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {dvdsPrice}</div>

        }
        else {result = dvdsPrice}
        
        return result
    }
    
    return (
        <div className="media-item-and-price">
          <div className="dvds">{dvds}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}