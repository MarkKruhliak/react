import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    let [users,serUsers]= useState([]);

    useEffect(()=>{
        userService.getAll().then(value => serUsers(value))
    },[])

    return (
        <div>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default Users;