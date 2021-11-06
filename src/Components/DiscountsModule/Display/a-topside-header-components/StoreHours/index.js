import React, {useContext} from 'react'
import {StoreHoursContext} from '../../../Context/contextObjects'

export const StoreHours = (props)=>{
  const storeHoursHeader = "Hours of Operation"
  const [storeHours] = useContext(StoreHoursContext)
  return (
      <div className="store-hours">
          <div>{storeHoursHeader}</div>
          {storeHours}
      </div>
  );
}