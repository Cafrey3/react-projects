import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import {} from './UsersPosts.css';

const UserPosts = () => {
    let {id} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPost([...value]));
    }, []);

    return (
        <>
            {post.map(post=>
                <div className={'users_posts'}>
                    <div><b>PostId: </b>{post.userId}</div>
                    <div><b>Id: </b>{post.id}</div>
                    <div><b>Title: </b>{post.title}</div>
                    <div><b>Body: </b>{post.body}</div>
                </div>
            )}
        </>
    );
};

export default UserPosts;