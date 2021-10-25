import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firestore/Config'
import {DvdsPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [dvdsPrice] = useContext(DvdsPriceContext)
    
    const dvdsRef = doc(db, "items", "dvds");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(dvdsRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="dvds-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={dvdsPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}