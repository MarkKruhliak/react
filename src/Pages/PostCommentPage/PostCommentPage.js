import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";

import {useParams} from "react-router-dom";
import PostCommentPageDetails from "../PostCommentPageDetails/PostCommentPageDetails";


const PostCommentPage = () => {
    let {id} = useParams();


    let [comments,setComments] = useState([]);


    useEffect(() => {
        postService.getComments(id).then(value => setComments(value))
    }, [id]);

    return (
        <div>
            {comments.map(comment=> <PostCommentPageDetails key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentPage;