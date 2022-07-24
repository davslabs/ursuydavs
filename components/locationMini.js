import React from 'react';

const LocationMini = ({title, content}) => {
    return(
        <div className='justify-content-center'>
            <div className='mini-title'>{title}</div>
            <div className='mini-content'>{content}</div>
        </div>
    )
}

export default LocationMini;