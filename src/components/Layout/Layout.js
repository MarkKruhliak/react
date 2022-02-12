import React from 'react';
import {Link, Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;