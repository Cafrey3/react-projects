import React, {useEffect, useState} from 'react';

const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then((value) => {
                let filter = value.filter(value => value.launch_year !== '2020');
                setSpaceX(filter);
            });
    }, []);

    return (
        <div>
            {spaceX.map(value => <div className={'space'} key={value.flight_number}>
                {value.mission_name} {value.launch_year} <img src={value.links.mission_patch_small} alt="mission_patch_small"/>
            </div>)}
        </div>
    );
};

export default SpaceX;