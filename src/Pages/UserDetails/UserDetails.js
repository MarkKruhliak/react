import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const UserDetails = () => {
    let {id} = useParams();

    let [userId,setUserId] = useState([]);

    useEffect(()=>{
        userService.getById(id).then(value => setUserId(value));
    },[id])


    return (
        <div>
            <div>Id:  {userId.id}</div>
            <div>Name:  {userId.name}</div>
            <div>Email:  {userId.email}</div>
            <Link to={'posts'}><button>Posts</button></Link>
            <Outlet/>
        </div>
    );
};

export default UserDetails;