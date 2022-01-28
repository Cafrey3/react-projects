import React from 'react';

const SinglePostComment = ({value:{postId, id, name, email, body}}) => {
    return (
        <div>
            {id}--{name}
        </div>
    );
};

export default SinglePostComment;