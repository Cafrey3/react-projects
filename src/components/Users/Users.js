import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import User from "../User/User";
import {userService} from "../../services/user.service";
import {} from './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={'main_users'}>
            <div className={'users'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;