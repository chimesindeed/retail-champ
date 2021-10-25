import React, {useContext} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {getFirestore} from 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';
import app from '../../../../../../../Firestore/Config'
import {AlbumsPriceContext} from '../../../../../../Context/contextObjects'

const db = getFirestore(app);

export const Input = () => {
    const [albumsPrice] = useContext(AlbumsPriceContext)
    
    const albumsRef = doc(db, "items", "albums");
    
    const handleDoubleClick = async(e) =>{
       await updateDoc(albumsRef, {
            price: e.target.value
});
        }
    
    return (
        <Form>
            <FormGroup>
                <input className="albums-input"
                       type="number"
                       name="priceInput"
                       id="priceInput"
                       placeholder={albumsPrice.price}
                       onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}