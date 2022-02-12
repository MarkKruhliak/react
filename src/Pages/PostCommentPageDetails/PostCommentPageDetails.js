import React from 'react';

const PostCommentPageDetails = ({comment}) => {
    let {name,body} = comment;

    return (
        <div>
            <div>{name}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostCommentPageDetails;