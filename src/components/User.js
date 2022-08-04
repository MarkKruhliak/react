import React from 'react';

const User = ({user}) => {
    return (
        <div>
            {user && (user.map(value =><div key={value.id}> {value.name} -- {value.username}</div>))}
        </div>
    );
};

export default User;
