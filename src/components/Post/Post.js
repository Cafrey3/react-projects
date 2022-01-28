import React from 'react';

import {} from './Post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <Link to={id.toString()} state={{...post}}>
            <>
                <div><b>Id:</b> {id}</div>
                <div><b>Title:</b> {title}</div>
            </>
        </Link>
    );
};

export default Post;