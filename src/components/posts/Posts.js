import React, {useEffect, useState} from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then((value) => setPosts(value));
    }, []);

    return (
        <div>
            {posts.map(posts => <div key={posts.id}>{posts.id}. {posts.title}. {posts.body}</div>)}
        </div>
    );
};

export default Posts;