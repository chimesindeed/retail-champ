 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {Price} from './Price'
 import {Input} from './Input'
 
 export default class Sets extends React.Component{
    constructor(){
        super()
        this.state= {
            isFlipped: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render(){
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div key = 'front' onDoubleClick={this.handleClick}>
                    <Price/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <Input/>
                </div>
            </ReactCardFlip>
        )
    }
}