import React from 'react';

const Dog = ({dog: {id, name}}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export {Dog};