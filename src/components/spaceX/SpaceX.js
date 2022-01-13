import React, {useEffect, useState} from 'react';

const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('')
            .then(value => value.json())
            .then((value) => {
                setSpaceX(value);
            });
    }, []);

    return (
        <div>
            {spaceX.map(value=><div></div> )}
        </div>
    );
};

export default SpaceX;