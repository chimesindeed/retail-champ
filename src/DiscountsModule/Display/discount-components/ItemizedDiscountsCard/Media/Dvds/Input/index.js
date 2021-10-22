//
import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {DvdsPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [dvdsPrice] = useContext(DvdsPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="dvds-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={dvdsPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}