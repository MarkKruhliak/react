import React from 'react';
import css from "../movies.module.css"

import {Header} from "../Header/Header";
import {Main} from "../Main/Main";





export const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
            <Main/>
        </div>
    );
};

