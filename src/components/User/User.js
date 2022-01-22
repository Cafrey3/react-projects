import React from 'react';


const User = ({user}) => {
    const {id, name, email, username} = user;

    return (
        <div className={'container'}>
            <div>{id}) {name} -- {username} -- {email}</div>
        </div>

    );
};

export default User;