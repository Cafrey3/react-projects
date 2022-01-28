import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import {} from './UserDetails.css';

const PostDetails = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state);
            return
        }

        postService.getByID(id).then(value => setUser({...value}));

    }, [state, id]);

    return (
        <div className={'user_details'}>
            {user &&
            <ul>
                <li><b>Id:</b> {user.id}</li>
                <li><b>Name:</b> {user.name}</li>
                <li><b>Username:</b> {user.username}</li>
                <li><b>Email:</b> {user.email}</li>
                <li><b>Address:</b>
                    <ul>
                        <li><b>Street:</b> {user.address.street}</li>
                        <li><b>Suite:</b> {user.address.suite}</li>
                        <li><b>City:</b> {user.address.city}</li>
                        <li><b>Zipcode:</b> {user.address.zipcode}</li>
                        <ul>
                            <li><b>Lat:</b> {user.address.geo.lat}</li>
                            <li><b>Lng:</b> {user.address.geo.lng}</li>
                        </ul>
                    </ul>
                </li>
                <li><b>Phone:</b> {user.phone}</li>
                <li><b>Website:</b> {user.website}</li>
                <li><b>Company:</b>
                    <ul>
                        <li><b>Name:</b> {user.company.name}</li>
                        <li><b>CatchPhrase:</b> {user.company.catchPhrase}</li>
                        <li><b>Bs:</b> {user.company.bs}</li>
                    </ul>
                </li>
            </ul>
            }
            <button><Link to={'posts'} state={{...user}}>Comments</Link></button>
            <div><Outlet/></div>
        </div>
    );
};

export default PostDetails;