import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={'post'}>
            <div>Id:{id}</div>
            <div>UserID:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Post;