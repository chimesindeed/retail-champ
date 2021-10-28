import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firebase/firebaseConfig'
import {SetsPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [setsPrice] = useContext(SetsPriceContext)
    
    const setsRef = doc(db, "items", "sets");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(setsRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="sets-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={setsPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}