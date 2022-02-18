import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Users from "./Pages/Users/Users";
import UserDetails from "./Pages/UserDetails/UserDetails";
import Posts from "./Pages/Posts/Posts";
import PostDetails from "./Pages/PostDetails/PostDetails";
import UserPostPage from "./Pages/UserPostPage/UserPostPage";
import PostCommentPage from "./Pages/PostCommentPage/PostCommentPage";
import Albums from "./Pages/Albums/Albums";
import Photos from "./Pages/Photos/Photos";

const App = () => {
    return (
        <div>
            <Routes>
                    <Route path={'/'} element={<Layout/>}>

                        <Route path={'users'} element={<Users/>}>

                            <Route path={':id'} element={<UserDetails/>}>
                                <Route path={'posts'} element={<UserPostPage/>}/>
                            </Route>

                            <Route path={':id/albums'} element={<Albums/>}>
                                <Route path={':albumId/photos'} element={<Photos/>}/>
                            </Route>

                        </Route>

                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>}>
                                <Route path={'comments'} element={<PostCommentPage/>}/>
                            </Route>
                        </Route>

                    </Route>
            </Routes>
        </div>
    )

    }
    export default App