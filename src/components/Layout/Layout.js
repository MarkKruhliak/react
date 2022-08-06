import React from 'react';
import css from "../movies.module.css"
import {Header} from "../Header/Header";


export const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
        </div>
    );
};

