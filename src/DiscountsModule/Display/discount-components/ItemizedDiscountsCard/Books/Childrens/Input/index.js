import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firestore/Config'
import {ChildrensPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [childrensPrice] = useContext(ChildrensPriceContext)
    
    const childrensRef = doc(db, "items", "childrens");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(childrensRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="childrens-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={childrensPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}