import React, {useEffect, useState} from 'react';

const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then((value) = setSpaceX(spaceX));
    }, []);


    return (
        <div>

        </div>
    );
};

export default SpaceX;