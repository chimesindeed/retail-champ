import React, {useContext} from 'react'
import {AlbumsPriceContext} from '../../../../../../Context/contextObjects'

export const Price = () => {

    const albums = 'Albums'

    const [albumsPrice]= useContext(AlbumsPriceContext)
    
    const priceFormatter = () => {
        let result;

        if (String(albumsPrice).length===3){

            result = <div style={{whiteSpace: 'pre-wrap'}}>  {albumsPrice}</div>

        }
        else {result = albumsPrice}
        
        return result
    }
    
    return (
        <div className="media-item-and-price">
          <div className="albums">{albums}</div>
          <div className="prices">{priceFormatter()}</div>
        </div>
    )
}