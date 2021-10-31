import React from 'react';
import Albums from './Albums'
import Cds from './Cds'
import Dvds from './Dvds'
import Sets from './Sets'
import Vhs from './Vhs'

const musicVideo = "Music / Video"

export const Media = (props) => {

    return (       
        <div className="media-container">
            <div className="media-title">
                {musicVideo}
            </div>
            
            <Albums />
            <Cds />
            <Vhs />
            <Dvds />
            <Sets />
        </div>
    );
};
