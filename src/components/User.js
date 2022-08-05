import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser, getUserById} from "../redux";
import UserDetails from "./UserDetails";
import css from './index.css'


const User = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className={css.main}>
                {user.id} -- {user.name}
                <button onClick={()=> dispatch(deleteUser(user.id))}>Delete</button>
                <button onClick={()=> dispatch(getUserById(user.id))}>More</button>
                <UserDetails/>
            </div>


        </div>

    );
};

export default User;
