import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firestore/Config'
import {HardcoverPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [hardcoverPrice] = useContext(HardcoverPriceContext)
    
    const hardcoverRef = doc(db, "items", "hardcover");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(hardcoverRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="hardcover-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={hardcoverPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}