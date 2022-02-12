import React from 'react';
import {useParams} from "react-router-dom";

const UserDetails = () => {
    let {id} = useParams();
    console.log(id)

    return (
        <div>
            hello
        </div>
    );
};

export default UserDetails;