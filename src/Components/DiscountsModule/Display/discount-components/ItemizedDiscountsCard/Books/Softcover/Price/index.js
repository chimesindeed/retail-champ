import React, {useContext} from 'react'
import {SoftcoverPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {

    const softcover = 'Softcover'

    const [softcoverPrice]= useContext(SoftcoverPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(softcoverPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {softcoverPrice}</div>

        }
        else {result = softcoverPrice}
        
        return result
    }
    
    return (
        <div className="books-item-and-price">
          <div className="softcover">{softcover}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}