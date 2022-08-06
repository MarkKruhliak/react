import React from 'react';
import css from "../movies.module.css"

import photo from "../../images/LOGO.png"
import search from "../../images/Search (1).png"
import menu from  "../../images/Menu.png"

export const Header = () => {



    return (
        <div>
            <div className={css.header_top}>
                <img src= {photo} alt=""/>
                <input className={css.header_top_input} src={search} type="text"/>
                <img src={menu} style={{height: '36px'}}  alt=""/>
            </div>
            <div className={css.header_bottom}>

            </div>
        </div>
    );
};

