import {Link} from "react-router-dom";
import React from "react";


const Post = ({post}) => {
    let {id,title} = post;

    return (
        <div>
            <div>{id}) {title}</div>
            <Link to={id + ""} state={post}><button>click here</button></Link>
        </div>
    );
};

export default Post;