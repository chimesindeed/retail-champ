import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firebase/firebaseConfig'
import {SoftcoverPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [softcoverPrice] = useContext(SoftcoverPriceContext)
    
    const softcoverRef = doc(db, "items", "softcover");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(softcoverRef, {
            price: e.target.value
});
        }
    
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