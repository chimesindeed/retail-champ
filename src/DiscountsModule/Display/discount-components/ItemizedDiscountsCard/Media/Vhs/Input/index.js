//
import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {VHSPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [vhsPrice] = useContext(VHSPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="vhs-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={vhsPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}