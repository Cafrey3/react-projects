import React from 'react';

const Cat = ({cat: {id, name}}) => {

    return (
        <div>
            {name}
        </div>
    );
};

export {Cat};