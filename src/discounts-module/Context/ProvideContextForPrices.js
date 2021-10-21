
// This Component wraps index.js to separate Context Logic From Presentational Flow.
import React, {useState} from 'react'
import * as Context from './contextObjects'

export const PricesContextContainer = (props) => {
  const [childrensPrice, setChildrensPrice] = useState('');
  const [softcoverPrice, setSoftcoverPrice] = useState('');
  const [hardcoverPrice, setHardcoverPrice] = useState('');
  const [albumsPrice, setAlbumsPrice] = useState('');
  const [vhsPrice, setVhsPrice] = useState('');
  const [cdsPrice, setCdsPrice] = useState('');
  const [dvdsPrice, setDvdsPrice] = useState('');
  const [setsPrice, setSetsPrice] = useState('As Marked');

    return (
      <Context.ChildrensPriceContext.Provider value={[childrensPrice, setChildrensPrice]}>
      <Context.SoftcoverPriceContext.Provider value={[softcoverPrice, setSoftcoverPrice]}>
      <Context.HardcoverPriceContext.Provider value={[hardcoverPrice, setHardcoverPrice]}>
      <Context.AlbumsPriceContext.Provider value={[albumsPrice, setAlbumsPrice]}>
      <Context.VHSPriceContext.Provider value={[vhsPrice, setVhsPrice]}>
      <Context.CdsPriceContext.Provider value={[cdsPrice, setCdsPrice]}>
      <Context.DvdsPriceContext.Provider value={[dvdsPrice, setDvdsPrice]}>
      <Context.SetsPriceContext.Provider value={[setsPrice, setSetsPrice]}>
        {props.children}
      </Context.SetsPriceContext.Provider>
      </Context.DvdsPriceContext.Provider>
      </Context.CdsPriceContext.Provider>
      </Context.VHSPriceContext.Provider>
      </Context.AlbumsPriceContext.Provider>
      </Context.HardcoverPriceContext.Provider>
      </Context.SoftcoverPriceContext.Provider>
      </Context.ChildrensPriceContext.Provider>
    )
}