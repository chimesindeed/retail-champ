//
import React, {useContext} from 'react'
import {AlbumsPriceContext} from '../../../../../../Context/contextObjects'

const albums = 'Albums'

export const Price = () => {
    const [albumsPrice]= useContext(AlbumsPriceContext)
    return (
        <div className="media-item-and-price">
          <div className="albums">{albums}</div>
          <div className="prices">{albumsPrice}</div>
        </div>
    )
}