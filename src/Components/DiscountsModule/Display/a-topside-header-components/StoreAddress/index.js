import React, {useContext}  from 'react'
import {StoreAddressContext} from '../../../Context/contextObjects'

export const StoreAddress = (props)=>{
    const [storeAddress] = useContext(StoreAddressContext)
  return (
    <div>
        a: {storeAddress}
    </div>
  );
  
}