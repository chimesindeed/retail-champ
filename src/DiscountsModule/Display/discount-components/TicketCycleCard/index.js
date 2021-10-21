import React from 'react';
import {Card} from 'reactstrap';
import {useDaysPassed} from '../../../Hooks/useDaysPassed'
import * as Ticket from './ColorComponents'

export const TicketCycleCard = (props) => {
    const {color} = useDaysPassed();
    
    const setColorComponent = () => {
        switch(color){
            case 'Yellow': return <Ticket.Yellow />
            case 'Green': return <Ticket.Green />
            case 'Blue': return <Ticket.Blue />
            case 'White': return <Ticket.White />
            case 'Pink': return <Ticket.Pink />
            
            default: return "Loading..."
        }
    }
    return (
        <Card>
            <div className="ticket-cycle-title">
                Clothing / Handbags
            </div>
            
            {
            
            setColorComponent()
            
            }
        </Card>
    );
};