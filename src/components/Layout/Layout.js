import React from 'react';
import {Link, Outlet} from "react-router-dom"
import css from "./Layout.module.css"

const Layout = () => {
    return (
        <div>
            <div className={css.wrap}>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;