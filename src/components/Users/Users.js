import User from "../User/User";

const Users = ({users}) => {

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;