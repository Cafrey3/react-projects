import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import {} from './PostDetails.css';

const PostDetails = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }

        postService.getByID(id).then(value => setPost({...value}));

    }, [state, id]);


    return (
        <div className={'post_details'}>
            {post &&
            <div>
                <div><b>UserId:</b> {post.userId}</div>
                <div><b>Id:</b> {post.id}</div>
                <div><b>Title:</b> {post.title}</div>
                <div><b>Body:</b> {post.body}</div>
            </div>
            }

            <button className={'btn_comments'}><Link to={'comments'} state={{...post}}>Comments</Link></button>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetails;