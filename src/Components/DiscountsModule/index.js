import React from 'react'
import '../../Styles/Styles.css'
import {StoreId} from './Display/a-topside-header-components/StoreId'
import {StoreAddress} from './Display/a-topside-header-components/StoreAddress'
import {StorePhone} from './Display/a-topside-header-components/StorePhone'
import {StoreHours} from './Display/a-topside-header-components/StoreHours'
import {DiscountsHeader} from './Display/a-topside-header-components/DiscountsHeader'
import {StoreExchangePolicy} from './Display/b-rightside-header-components/StoreExchangePolicy'
import {TicketCycleCard} from './Display/discount-components/TicketCycleCard'
import {ItemizedDiscountsCard} from './Display/discount-components/ItemizedDiscountsCard'

export const DiscountsModule = () => {
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
                <DiscountsHeader />
            </div>

            <div className="exchange-policy">
                <StoreExchangePolicy />
            </div>
        
            <div className="discount-boxes-wrapper">
                <TicketCycleCard />
                
                <div className="itemized-discounts-card">
                    <ItemizedDiscountsCard />                
                </div>
            </div>
        </div>
    )
}