import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser, getUserById} from "../redux";
import UserDetails from "./UserDetails";



const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {user.id} -- {user.name}
            <button onClick={()=> dispatch(deleteUser(user.id))}>Delete</button>
            <button onClick={()=> dispatch(getUserById(user.id))}>More</button>

        </div>

    );
};

export default User;
