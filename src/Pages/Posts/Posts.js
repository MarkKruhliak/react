import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../Post/Post";
import {Outlet} from "react-router-dom";
import css from "./Posts.module.css"

const Posts = () => {
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts(value));
    },[])

    return (
        <div className={css.leader}>
            <div>{posts.map(post=> <Post key={post.id} post={post}/>)}</div>
            <Outlet/>
        </div>
    );
};

export default Posts;