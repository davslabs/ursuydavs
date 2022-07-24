import React from 'react';

const LinkTo = ({url, text}) => {
    return (
        <a
            href={url}
            className='btn btn-light btn-save-date'
            >
            {text}
        </a>
    )
};

export default LinkTo;