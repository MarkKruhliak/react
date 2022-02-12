import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import PostCommentPageDetails from "../PostCommentPageDetails/PostCommentPageDetails";
import {useParams} from "react-router-dom";

const PostCommentPage = () => {
    let {id} = useParams();


    let [comments,setComments] = useState(null);


    useEffect(() => {
        postService.getComments(id).then(value => setComments({...value}))
    }, [id]);

    return (
        <div>
            {comments && (comments.map(comment => <PostCommentPageDetails key={comment.id} comment={comment}/>))}
        </div>
    );
};

export default PostCommentPage;