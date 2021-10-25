import React, {useContext} from 'react'
import {HardcoverPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const hardcover = 'Hardcover'
    
    const [hardcoverPrice]= useContext(HardcoverPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(hardcoverPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {hardcoverPrice}</div>

        }
        else {result = hardcoverPrice}
        
        return result
    }
    
    return (
        <div className="books-item-and-price">
          <div className="hardcover">{hardcover}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}