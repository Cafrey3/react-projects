import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {} from './components/User/User.css';
import {} from './components/Users/Users.css'
import {} from './components/UserDetails/UserDetails.css'
import {} from './components/Post/Post.css'
import {postService} from "./components/services/post.service";

const App = () => {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);


    const getUser = (user) => {
        setUser(user);
        setPosts([]);
    };

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]));
    };
    return (
        <>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {posts && <Posts posts={posts}/>}
        </>
    );
};

export default App;