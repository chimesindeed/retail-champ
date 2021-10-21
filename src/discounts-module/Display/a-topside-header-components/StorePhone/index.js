import React, {useContext}  from 'react'
import {StorePhoneContext} from '../../../Context/contextObjects'

export const StorePhone = (props)=>{
    const [storePhone] = useContext(StorePhoneContext)
    return (
        <div>
            p {storePhone}
        </div>
  );
}