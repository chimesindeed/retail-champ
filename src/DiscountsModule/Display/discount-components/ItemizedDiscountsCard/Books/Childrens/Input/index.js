import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {ChildrensPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [childrensPrice] = useContext(ChildrensPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="hardcover-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={childrensPrice}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}