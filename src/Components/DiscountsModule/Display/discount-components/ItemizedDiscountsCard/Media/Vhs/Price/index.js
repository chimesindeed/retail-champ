import React, {useContext} from 'react'
import {VHSPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const vhs = 'Vhs'
    
    const [vhsPrice]= useContext(VHSPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(vhsPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {vhsPrice}</div>

        }
        else {result = vhsPrice}
        
        return result
    }
    
    return (
        <div className="media-item-and-price">
          <div className="vhs">{vhs}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}