import React, {useEffect, useState} from 'react';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

function App() {
    let [users, setUsers] = useState([]);
    let [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll.then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, []);

    const getObject = (data) => {
    let filterArr = [...users]

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.includes(data.name));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.includes(data.username));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.includes(data.email));
        }
        setFilteredUsers(filterArr);
    }

    return (
        <div>
            <Form getObject={getObject}/>
            <Users users={filteredUsers}/>

        </div>
    );
}

export default App;