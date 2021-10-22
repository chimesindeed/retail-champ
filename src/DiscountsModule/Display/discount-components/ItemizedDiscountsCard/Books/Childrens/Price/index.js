import React, {useContext} from 'react'
import {ChildrensPriceContext} from '../../../../../../Context/contextObjects'

const childrens = 'Childrens'

export const Price = () => {
    const [childrensPrice]= useContext(ChildrensPriceContext)
    return (
        <div className="books-item-and-price">
          <div className="hardcover">{childrens}</div>
          <div className="prices">{childrensPrice}</div>
        </div>
    )
}