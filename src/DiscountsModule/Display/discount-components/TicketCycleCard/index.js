import React from 'react';
import {Card} from 'reactstrap';
import {useDaysPassed} from '../../../Hooks/useDaysPassed'

export const TicketCycleCard = (props) => {
    const {color} = useDaysPassed();
    const setColorComponent = () => {
        switch(color){
            case 'Yellow': return "YELLOW"
            case 'Green': return "GREEN"
            case 'Blue': return "BLUE"
            case 'White': return "WHITE"
            case 'Pink': return "PINK"
            
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