import React from 'react';

const AlbumsUsers = ({album}) => {
    let {title} = album
    return (
        <div>
            <div>Title:  {title}</div>

            <hr/>
        </div>
    );
};

export default AlbumsUsers;