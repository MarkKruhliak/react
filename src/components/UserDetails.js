import React from 'react';
import {useSelector} from "react-redux";

const UserDetails = () => {
    const {usersId} = useSelector(state => state.UserReducer);

    return (
        <div>
            {usersId.id}
        </div>
    );
};

export default UserDetails;
