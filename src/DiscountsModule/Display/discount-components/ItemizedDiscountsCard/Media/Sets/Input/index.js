//
import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {SetsPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [setsPrice] = useContext(SetsPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="sets-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={setsPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}