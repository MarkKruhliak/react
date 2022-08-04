import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser} from "../redux";



const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {user.id} -- {user.name}
            <button onClick={()=> dispatch(deleteUser(user.id))}>Delete</button>
        </div>

    );
};

export default User;
