import React from 'react';

import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <Link to={id.toString()} state={user}>
            <div>{id}. {name}</div>
        </Link>
    );
};

export default User;