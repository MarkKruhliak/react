import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";
import {Outlet} from "react-router-dom";
import css from "./Users.module.css"

const Users = () => {
    let [users,serUsers]= useState([]);

    useEffect(()=>{
        userService.getAll().then(value => serUsers(value))
    },[])

    return (
        <div className={css.render}>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default Users;