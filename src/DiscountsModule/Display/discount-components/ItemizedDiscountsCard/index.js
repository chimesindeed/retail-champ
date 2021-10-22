import React from 'react';
import {Books} from '../ItemizedDiscountsCard/Books'

const media = "MEDIA"
export const ItemizedDiscountsCard = (props) => {
    return (
        <div>
            <div className="itemized-discounts-card-title">{media}</div>
            <div className="books-and-media-container">
                <Books />
            </div>
        </div>
  );
};
