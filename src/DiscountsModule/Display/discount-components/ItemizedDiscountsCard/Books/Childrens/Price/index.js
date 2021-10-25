import React, {useContext} from 'react'
import {ChildrensPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const childrens = 'Childrens'
    
    const [childrensPrice]= useContext(ChildrensPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(childrensPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {childrensPrice}</div>

        }
        else {result = childrensPrice}
        
        return result
    }
    
    return (
        <div className="books-item-and-price">
          <div className="hardcover">{childrens}</div>
          <div className="prices">{priceFormatter()}</div>  
        </div>
    )
}