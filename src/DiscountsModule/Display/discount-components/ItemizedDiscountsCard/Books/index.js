import React from 'react';

const books = "Books"

export const Books = (props) => {
    return (
        <div className="books-container">
            <div className="books-title">
                {books}
            </div>
            
            <h3>Softcover</h3>
            <h3>Hardcover</h3>
            <h3>Childrens</h3>
        </div>
  );
};
