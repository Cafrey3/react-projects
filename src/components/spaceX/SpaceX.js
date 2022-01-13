import React, {useEffect, useState} from 'react';

const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('')
            .then(value => value.json())
            .then((value) => {
                let filter = value.filter(value => value.launch_year !== 2020);
                setSpaceX(filter);
            });
    }, []);

    return (
        <div>
            {spaceX.map(value => <div key={value.flight_number}>
                {value.mission_name} {value.launch_year}
            </div>)}
        </div>
    );
};

export default SpaceX;