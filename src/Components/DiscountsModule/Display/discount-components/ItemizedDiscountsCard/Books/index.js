import React from 'react';
import {Softcover} from './Softcover'
import {Hardcover} from './Hardcover'
import {Childrens} from './Childrens'

const books = "Books"

export const Books = (props) => {
    return (
        <div className="books-container">
            <div className="books-title">
                {books}
            </div>

            <Softcover />
            <Hardcover />
            <Childrens />
            
        </div>
  );
};
