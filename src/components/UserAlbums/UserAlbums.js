import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {} from './UserAlbums.css'
const UserAlbums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then(value => value.json())
            .then((value) => {
                setAlbums([...value])
            });
    }, [id]);

    return (
        <div>
            {albums.map(album =>
                <div key={album.id} className={'albums'}>
                    <div><b>UserId:</b> {album.userId}</div>
                    <div><b>Id:</b> {album.id}</div>
                    <div><b>Title:</b> {album.title}</div>
                    <button><Link to={`${album.id}/photos`} state={{album}}>Show photos</Link></button>
                </div>
            )}
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default UserAlbums;