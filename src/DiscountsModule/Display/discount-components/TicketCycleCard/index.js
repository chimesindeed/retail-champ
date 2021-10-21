import React from 'react';
import {Card} from 'reactstrap';
import '../../../Styles.css'
import {useDaysPassed} from '../../../Hooks/useDaysPassed'

export const TicketCycleContainer = (props) => {
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
        <div>
        Clothing / Handbags
        </div>
            
        {
            setColorComponent()
        }
        
      </Card>
  );
};