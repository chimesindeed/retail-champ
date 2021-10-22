//
import React, {useContext} from 'react'
import {SetsPriceContext} from '../../../../../../Context/contextObjects'

const sets = 'Sets'

export const Price = () => {
    const [setsPrice]= useContext(SetsPriceContext)
    return (
        <div className="media-item-and-price">
          <div className="sets">{sets}</div>
          <div className="prices">{setsPrice}</div>
        </div>
    )
}