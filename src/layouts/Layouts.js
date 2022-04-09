import React from 'react';
import css from "./Layout.module.css"

export const Layouts = ({children}) => {
    return (
        <div className={css.mainWrapper}>
            <header>header data</header>
            <main>{children}</main>
            <footer>footer data</footer>
        </div>
    );
};

