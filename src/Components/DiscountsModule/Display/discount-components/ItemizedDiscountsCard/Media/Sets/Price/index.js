import React, {useContext} from 'react'
import {SetsPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {
    
    const sets = 'Sets'
    
    const [setsPrice]= useContext(SetsPriceContext)
        
    return (
        <div className="media-item-and-price">
          <div className="sets">{sets}</div>
          <div className="prices">{setsPrice}</div>
        </div>
    )
}