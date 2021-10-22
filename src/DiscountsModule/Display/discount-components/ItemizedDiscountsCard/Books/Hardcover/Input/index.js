import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {HardcoverPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [hardcoverPrice] = useContext(HardcoverPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="hardcover-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={hardcoverPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}