import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

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
                <div><b>Id:</b> {post.id}</div>
                <div><b>UserId:</b> {post.userId}</div>
                <div><b>Title:</b> {post.title}</div>
                <div><b>Body:</b> {post.body}</div>
            </div>
            }
            <button>Comments</button>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetails;