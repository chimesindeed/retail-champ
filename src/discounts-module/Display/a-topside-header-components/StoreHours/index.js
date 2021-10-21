import React, {useContext} from 'react'
import {StoreHoursContext} from '../../../Context/ProvideContextForHeaders'

export const StoreHours = (props)=>{
  const [storeHours] = useContext(StoreHoursContext)
  return (
      <div className="store-hours">
          <div>Hours of Operation</div>
          {storeHours}
      </div>
  );
}