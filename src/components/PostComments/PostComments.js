import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";

const PostComments = () => {
    let {id} = useParams();
    const [comment, setComment] = useState(null);

    useEffect(() => {
        commentService.getByID(id).then(value => setComment({...value}));
    }, [id]);

    return (
        <>
            {comment &&
                <div className={'post_comments'}>
                    <div><b>PostId:</b> {comment.postId}</div>
                    <div><b>Id:</b> {comment.id}</div>
                    <div><b>Name:</b> {comment.name}</div>
                    <div><b>Email:</b> {comment.email}</div>
                    <div><b>Body:</b> {comment.body}</div>
                </div>
            }
        </>

    );
};

export default PostComments;