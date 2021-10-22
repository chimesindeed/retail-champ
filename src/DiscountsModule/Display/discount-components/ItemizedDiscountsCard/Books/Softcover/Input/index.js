import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {SoftcoverPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [softcoverPrice] = useContext(SoftcoverPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="softcover-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={softcoverPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}