import React, {useEffect, useState} from 'react';


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setUsers(users));
    }, []);

    return (
        <div>
            {users.map(users => <div key={users.id}> {users.id}. {users.name}</div>)}
        </div>
    );
};

export default Users
