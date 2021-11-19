import React, {useContext}  from 'react'
import {InstagramContext} from '../../../Context/contextObjects'

export const Instagram = (props)=>{
    const [instagram] = useContext(InstagramContext)
    
    return (
        <div className="instagram-wrapper">
            <div className="instagram-header">Psst...We're On Instagram!</div>
            <div className="instagram-text">{instagram}</div>
        </div>
  );
  
}