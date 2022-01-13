import React from 'react';

import './App.css';
import Users from "./components/users/Users";
import './components/users/Users.css'
import Posts from "./components/posts/Posts";
import './components/posts/Posts.css';
import Comments from "./components/comments/Comments";
import './components/comments/Comments.css';

const App = () => {
    return (
        <div className={'app'}>
            <div className={'wrap'}>
                <div className={'users'}>
                    <Users/>
                </div>
                <div className={'posts'}>
                    <Posts/>
                </div>
            </div>
            <div>
                <div className={'comments'}>
                    <Comments/>
                </div>
            </div>
        </div>
    );
};

export default App;