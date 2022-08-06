import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser, getUserById} from "../../redux";


export const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {user.id} -- {user.name}
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
            <button onClick={() => dispatch(getUserById(user.id))}>More</button>
        </div>

    );
};


