import React, {useContext} from 'react'
import {CdsPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const cds = 'Cds'
    
    const [cdsPrice]= useContext(CdsPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(cdsPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {cdsPrice}</div>

        }
        else {result = cdsPrice}
        
        return result
    }
    
    return (
        <div className="media-item-and-price">
          <div className="cds">{cds}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}