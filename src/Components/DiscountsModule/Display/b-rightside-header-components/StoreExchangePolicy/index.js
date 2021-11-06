import React, {useContext}  from 'react'
import {StoreExchangePolicyContext} from '../../../Context/contextObjects'

export const StoreExchangePolicy = (props)=>{
    const [storeExchangePolicy] = useContext(StoreExchangePolicyContext)
    
    const formatter = () => {
        const l1 = storeExchangePolicy.substring(0, 15)
        const l2 = storeExchangePolicy.match(/No Exchanges/);
        const l3 = storeExchangePolicy.match(/No Returns/)
        return (
          <div style={{whiteSpace: "pre-line"}}>
            {`${l1}
            ${l2}
            ${l3}`}
          </div>
        )
    }
    return (
        <div className="exchange-policy-wrapper">
        <div className="exchange-policy-header">Exchange Policy</div>
        <div className="exchange-policy">
            {formatter()}
        </div>
    </div>
  );
  
}