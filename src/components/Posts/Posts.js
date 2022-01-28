import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "../Post/Post";
import {Outlet} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={'main_posts'}>
            <div>
                {posts.map(post => <div className={'posts'}><Post key={post.id} post={post}/></div>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Posts;