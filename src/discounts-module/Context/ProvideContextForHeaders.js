
// This Component wraps index.js to separate Context Logic From Presentational Flow.
import React, {useState} from 'react'
import * as Context from './contextObjects'

export const HeadersContextContainer = (props) => {
  const [storeNumber, setStoreNumber] = useState('Number');
  const [storeAddress, setStoreAddress] = useState('Address');
  const [storePhone, setStorePhone] = useState('Phone');
  const [storeHours, setStoreHours] = useState('Hours');
  const [storeExchangePolicy, setStoreExchangePolicy] = useState('Exchange Policy')

    return (
      <Context.StoreNumberContext.Provider value={[storeNumber, setStoreNumber]}>
      <Context.StoreAddressContext.Provider value={[storeAddress, setStoreAddress]}>
      <Context.StorePhoneContext.Provider value={[storePhone, setStorePhone]}>
      <Context.StoreHoursContext.Provider value={[storeHours, setStoreHours]}>
      <Context.StoreExchangePolicyContext.Provider value={[storeExchangePolicy, setStoreExchangePolicy]}>
        {props.children}
      </Context.StoreExchangePolicyContext.Provider>
      </Context.StoreHoursContext.Provider>
      </Context.StorePhoneContext.Provider>
      </Context.StoreAddressContext.Provider>
      </Context.StoreNumberContext.Provider>
    )
}