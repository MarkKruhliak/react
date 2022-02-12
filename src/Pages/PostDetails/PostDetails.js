import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

import {Outlet} from "react-router-dom"

const PostDetails = () => {
    let {id} = useParams();

    let [poster, setPoster] = useState(null);
    let {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPoster(state)
            return;
        }
        postService.getById(id).then(value => setPoster({...value}));
    }, [id]);


    return (
        <div>
            {poster && (
                <div>
                    <div>Id: {poster.id}</div>
                    <div>Title: {poster.title}</div>
                    <div>BodyId: {poster.body}</div>
                </div>
            )}
            <Link to={'comments'} state={state}><button>Comments</button></Link>
            <Outlet/>
        </div>
    );
};

export default PostDetails;