import React from 'react';
import css from "../movies.module.css"

import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footter} from "../Footter/Footter";


export const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
            <Main/>
            <Footter/>
        </div>
    );
};

