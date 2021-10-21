import React from 'react'
import '../../../Styles/Styles.css'
import {StoreId} from '../../../discounts-module/Display/a-topside-header-components/StoreId'
import {StoreAddress} from '../../../discounts-module/Display/a-topside-header-components/StoreAddress'
import {StorePhone} from '../../../discounts-module/Display/a-topside-header-components/StorePhone'
import {StoreHours} from '../../../discounts-module/Display/a-topside-header-components/StoreHours'
import {DiscountsTitle} from '../../../discounts-module/Display/a-topside-header-components/DiscountsTitle'

export const DiscountsModuleRoute = () => {
  return (
    <div className="wrapper">
        <div className="store-id">
            <StoreId />
        </div>
        <div className="store-add">
            <StoreAddress />
        </div>
        <div className="store-phone">
            <StorePhone />
        </div> 
        <div className="store-hours">
            <StoreHours />
        </div>
        <div className="discounts-title">
            <DiscountsTitle />
        </div>
        <div className="exchange-policy"> Exchange Policy </div>
    </div>
  )
}