import React from 'react';
import {Books} from './Books'
import {Media} from './Media'

const media = "MEDIA"
export const ItemizedDiscountsCard = (props) => {
    return (
        <div className="itemized-discounts-card">
            <div className="itemized-discounts-card-title">{media}</div>
            <div className="books-and-media-container">
                <Books />
                <Media />
            </div>
        </div>
    );
};