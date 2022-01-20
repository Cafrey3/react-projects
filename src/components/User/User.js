import React from 'react';


const User = ({user, getUser}) => {
    const {id, name,} = user;

    return (
        <div className={'container'}>
            <div>{id}) {name}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>

    );
};

export default User;