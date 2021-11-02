import React, {useState, useContext} from 'react'
import ReactCardFlip from 'react-card-flip'
import {Price} from './Price'
import {Input} from './Input'
import {CurrentUser} from '../../../../../Context/contextObjects'

export const Softcover = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [currentUser] = useContext(CurrentUser)
    
    const handleClickFromFront = (e) => {
        if (currentUser?.email){
            setIsFlipped(prevState => (!prevState));
        }
    }
    
    const handleClickFromBack = (e) => {
        setIsFlipped(prevState => (!prevState));
    }
    
    return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div key = 'front' onDoubleClick={handleClickFromFront}>
                    <Price/>
                </div>

                <div key="back" onDoubleClick={handleClickFromBack}>
                    <Input/>
                </div>
            </ReactCardFlip>
    )
}