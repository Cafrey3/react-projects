import React from 'react';
import {Routes, Route,} from "react-router-dom";

import './App.css';
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import PostDetails from "./components/PostDetails/PostDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import SinglePostComment from "./components/SinglePostComment/SinglePostComment";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<SinglePostComment/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;