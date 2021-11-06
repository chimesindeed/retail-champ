import React, {useContext}  from 'react'
import {StorePhoneContext} from '../../../Context/contextObjects'

export const StorePhone = (props)=>{
    const p = 'p:'
    const [storePhone] = useContext(StorePhoneContext)
    return (
        <div className="store-phone">
            {p} {storePhone}
        </div>
  );
}