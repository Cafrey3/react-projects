import React from 'react';

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'details'}>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{username}</li>
                <li>{email}</li>
                <ul>
                    <li>{address.street}</li>
                    <li>{address.suite}</li>
                    <li>{address.city}</li>
                    <li>{address.zipcode}</li>
                    <li>{address.geo.lat}</li>
                    <li>{address.geo.lng}</li>
                </ul>
                <li>{phone}</li>
                <li>{website}</li>
                <ul>
                    <li>{company.name}</li>
                    <li>{company.catchPhrase}</li>
                    <li>{company.bs}</li>
                </ul>
            </ul>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;