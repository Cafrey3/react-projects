import React, {useEffect, useState} from 'react';

import {} from './App.css';
import {} from './components/Users/Users.css';
import {} from './components/Form/Form.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./components/services/user.service";


const App = () => {
    const [users, setUsers] = useState([]);
    const [filterUser, setFilterUser] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilterUser([...value])
        })
        }, [])

        const filter = (data) => {
            let filteredArray =[...users]

            if (data.name) {
                filteredArray = filteredArray.filter(value => value.name.includes(data.name));
            }
            if (data.username) {
                filteredArray = filteredArray.filter(value => value.username.includes(data.username));
            }
            if (data.email) {
                filteredArray = filteredArray.filter(value => value.email.includes(data.email));
            }

            setFilterUser(filteredArray);
        }

        return (
            <div>
                <Form filter={filter}/>
                <Users users={filterUser}/>
            </div>
        );
    };

    export default App;