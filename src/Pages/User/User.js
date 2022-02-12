import React from 'react';
import {Link} from 'react-router-dom'

const User = ({user}) => {
    let {id,name} = user;
    return (
        <div>
            <div>{id}) {name}</div>
            <Link to={id + ""}><button>click here</button></Link>
        </div>
    );
};

export default User;