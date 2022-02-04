import React from 'react';

const Post = ({post}) => {
        let {id,userId,title,body} = post;
    return (
        <div>
            <div>Id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default Post;