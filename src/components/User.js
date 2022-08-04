import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser} from "../redux";


const User = ({user}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {user && (user.map(value =><div key={value.id}> {value.name} -- {value.username}
                <button onClick={()=>(dispatch(deleteUser(user.id)))}>Cancel</button></div>))}

        </div>

    );
};

export default User;
