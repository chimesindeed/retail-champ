import React, {useContext}  from 'react'
import {StoreExchangePolicyContext} from '../../../Context/contextObjects'

export const StoreExchangePolicy = (props)=>{
    const [storeExchangePolicy] = useContext(StoreExchangePolicyContext)
  return (
    <div>
    <h3>Exchange Policy</h3>
    {storeExchangePolicy}
    </div>
  );
  
}