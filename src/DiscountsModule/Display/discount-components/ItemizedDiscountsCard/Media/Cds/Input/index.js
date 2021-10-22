//
import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {CdsPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [cdsPrice] = useContext(CdsPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="cds-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={cdsPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}