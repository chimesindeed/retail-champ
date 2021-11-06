
// This Component wraps index.js to separate Context Logic From Presentational Flow.
import React, {useState} from 'react'
import * as Context from './contextObjects'

export const ProvideContextForHeaders = (props) => {
  const [currentUser, setCurrentUser] = useState({})
  const [loginBarToggle, setLoginBarToggle] = useState(false)
  const [storeId, setStoreId] = useState('');
  const [storeAddress, setStoreAddress] = useState('xxxxx');
  const [storePhone, setStorePhone] = useState('(xxx) xxx-xxxx');
  const [storeHours, setStoreHours] = useState('');
  const [storeExchangePolicy, setStoreExchangePolicy] = useState('')

    return (
      <Context.CurrentUser.Provider value={[currentUser, setCurrentUser]}>
      <Context.LoginBarToggle.Provider value={[loginBarToggle, setLoginBarToggle]}>
      <Context.StoreIdContext.Provider value={[storeId, setStoreId]}>
      <Context.StoreAddressContext.Provider value={[storeAddress, setStoreAddress]}>
      <Context.StorePhoneContext.Provider value={[storePhone, setStorePhone]}>
      <Context.StoreHoursContext.Provider value={[storeHours, setStoreHours]}>
      <Context.StoreExchangePolicyContext.Provider value={[storeExchangePolicy, setStoreExchangePolicy]}>
        {props.children}
      </Context.StoreExchangePolicyContext.Provider>
      </Context.StoreHoursContext.Provider>
      </Context.StorePhoneContext.Provider>
      </Context.StoreAddressContext.Provider>
      </Context.StoreIdContext.Provider>
      </Context.LoginBarToggle.Provider>
      </Context.CurrentUser.Provider>
    )
}