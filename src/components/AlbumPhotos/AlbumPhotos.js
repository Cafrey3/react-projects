import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {} from './AlbumPhotos.css';
const AlbumPhotos = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then(value =>  value.json())
            .then((value) => {
                setPhotos(value)
            });
    },[id]);
    return (
        <div>
            {photos.map(photo=>
                <div className={'photos'}>
                    <div><b>AlbumId:</b> {photo.albumId}</div>
                    <div><b>Id:</b> {photo.id}</div>
                    <div><b>Title:</b> {photo.title}</div>
                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                </div>
            )}
        </div>
    );
};

export default AlbumPhotos;