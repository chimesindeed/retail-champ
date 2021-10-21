import React from 'react'
import '../../../Styles/Styles.css'
import {StoreId} from '../../../DiscountsModule/Display/a-topside-header-components/StoreId'
import {StoreAddress} from '../../../DiscountsModule/Display/a-topside-header-components/StoreAddress'
import {StorePhone} from '../../../DiscountsModule/Display/a-topside-header-components/StorePhone'
import {StoreHours} from '../../../DiscountsModule/Display/a-topside-header-components/StoreHours'
import {DiscountsTitle} from '../../../DiscountsModule/Display/a-topside-header-components/DiscountsTitle'
import { StoreExchangePolicy } from '../../../DiscountsModule/Display/b-rightside-header-components/StoreExchangePolicy'
import { TicketCycleCard} from '../../../DiscountsModule/Display/discount-components/TicketCycleCard'

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
        <div className="discounts-header">
            <DiscountsTitle />
        </div>
        <div className="exchange-policy">
            <StoreExchangePolicy />
        </div>
        <div className="discount-boxes-wrapper">
        <div className="ticket-cycle-card">
            <TicketCycleCard />
        </div>
        <div className="itemized-discounts-card">
            
        </div>
        </div>
    </div>
  )
}