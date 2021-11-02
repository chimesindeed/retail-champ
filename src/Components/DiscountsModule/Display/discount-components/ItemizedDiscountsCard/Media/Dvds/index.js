 import React, {useState, useContext} from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {Price} from './Price'
 import {Input} from './Input'
 import {CurrentUser} from '../../../../../Context/contextObjects'
 
 export const Dvds = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        setIsFlipped(prevState => (!prevState));
    }
    
    return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div key = 'front' onDoubleClick={handleClick}>
                    <Price/>
                </div>

                <div key="back" onDoubleClick={handleClick}>
                    <Input/>
                </div>
            </ReactCardFlip>
        )
    }
