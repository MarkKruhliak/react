import React from 'react';

const UserPostPageDetails = ({post}) => {
    let {title,body} = post;


    return (
        <div>
            <div>Title:  {title}</div>
            <div>Body:  {body}</div>
            <br/>
        </div>
    );
};

export default UserPostPageDetails;