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
    let fitlerArr = [...users]

        if (data.name) {
            fitlerArr = fitlerArr.filter(user => user.name.toLowerCase().includes(data.name));
        }
        if (data.name) {
            fitlerArr = fitlerArr.filter(user => user.username.toLowerCase().includes(data.username));
        }
        if (data.name) {
            fitlerArr = fitlerArr.filter(user => user.email.toLowerCase().includes(data.email));
        }
        setFilteredUsers(fitlerArr);
    }

    return (
        <div>
            <Form getObject={getObject}/>
            <Users users={filteredUsers}/>

        </div>
    );
};

export default App;