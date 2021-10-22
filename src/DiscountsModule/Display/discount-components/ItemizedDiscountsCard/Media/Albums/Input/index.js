//
import React, {useContext} from 'react';
import { Form, FormGroup,} from 'reactstrap';
import {AlbumsPriceContext} from '../../../../../../Context/contextObjects'


export const Input = () => {
    const [albumsPrice] = useContext(AlbumsPriceContext)
    
    const handleDoubleClick = async(e) =>{}    
    
    return (
        <Form>
            <FormGroup>
                <input className="albums-input"
                    type="number"
                    name="priceInput"
                    id="priceInput"
                    placeholder={albumsPrice}
                    onDoubleClick={handleDoubleClick}/>
            </FormGroup>
        </Form>
    )
}