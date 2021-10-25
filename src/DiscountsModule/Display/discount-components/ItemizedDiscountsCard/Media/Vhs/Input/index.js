import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firestore/Config'
import {VHSPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [vhsPrice] = useContext(VHSPriceContext)
    
    const vhsRef = doc(db, "items", "vhs");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(vhsRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="vhs-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={vhsPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}