import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../../Firebase/firebaseConfig'
import {CdsPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [cdsPrice] = useContext(CdsPriceContext)
    
    const cdsRef = doc(db, "items", "cds");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(cdsRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="cds-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={cdsPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}