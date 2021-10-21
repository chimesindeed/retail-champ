import React, {useContext} from 'react'
import {StoreIdContext} from '../../../Context/contextObjects'

export const StoreId = (props)=>{
    const [storeId] = useContext(StoreIdContext)
    return (
        <div>
            Retail Hub #{storeId}
        </div>
    );
}