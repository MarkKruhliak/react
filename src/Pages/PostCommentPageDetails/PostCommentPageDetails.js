import React from 'react';

const PostCommentPageDetails = ({comment}) => {
    let {name,body} = comment;

    return (
        <div>

            <div>Name:  {name}</div>
            <div>Body:  {body}</div>
            <br/>
        </div>
    );
};

export default PostCommentPageDetails;