import React, {useEffect, useState} from 'react';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then((value) => setComments(value));
    }, []);

    return (
        <div>
            {comments.map(comments => <div>{comments.id}. {comments.name}. {comments.email}. {comments.body}</div>)}
        </div>
    );
};

export default Comments;