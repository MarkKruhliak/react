import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser, getUserById} from "../redux";
import UserDetails from "./UserDetails";
import css from './index.css'


const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex' }}>
            {user.id} -- {user.name}
                <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                <button onClick={() => dispatch(getUserById(user.id))}>More</button>

        </div>

    );
};

export default User;
