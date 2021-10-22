import React from 'react';
import {Books} from '../ItemizedDiscountsCard/Books'
import {Media} from '../ItemizedDiscountsCard/Media'

const media = "MEDIA"
export const ItemizedDiscountsCard = (props) => {
    return (
        <div>
            <div className="itemized-discounts-card-title">{media}</div>
            <div className="books-and-media-container">
                <Books />
                <Media />
            </div>
        </div>
    );
};