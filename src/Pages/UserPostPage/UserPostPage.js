import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import UserPostPageDetails from "../UserPostPageDetails/UserPostPageDetails";

const UserPostPage = () => {
    let {id} = useParams()
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        userService.getByIdPosts(id).then(value => setPosts(value));
    },[id])


    return (
        <div>
            {posts.map(post => <UserPostPageDetails key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostPage;