import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser} from "../redux";


const User = ({user, deleteUser}) => {

    return (
        <div>
            {user.id} -- {user.name}
            <button onClick={()=>deleteUser(user.id)}>Delete</button>
        </div>

    );
};

export default User;
