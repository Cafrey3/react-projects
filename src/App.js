import React from 'react';
import {Routes, Route,} from "react-router-dom";

import './App.css';
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import PostDetails from "./components/PostDetails/PostDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import PostComments from "./components/PostComments/PostComments";
import UserPosts from "./components/UserPosts/UserPosts";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import AlbumPhotos from "./components/AlbumPhotos/AlbumPhotos";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbums/>}>
                            <Route path={':albumId/photos'} element={<AlbumPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;