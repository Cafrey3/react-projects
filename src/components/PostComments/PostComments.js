import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comment.service";
import SinglePostComment from "../SinglePostComment/SinglePostComment";

const PostComments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => setComments([...value]));
    },[]);

    return (
        <div>
            <div>
                {comments.map(value => <SinglePostComment key={value.id} comment={value}/>)}
            </div>
        </div>

    );
};

export default PostComments;