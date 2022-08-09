import React from 'react';
import css from "../movies.module.css"

import facebook from "../../images/fa-brands_facebook-square.png"
import insta from "../../images/Vector.png"
import twitter from "../../images/Vector (1).png"
import youtube from "../../images/Vector (2).png"

export const Footter = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer_img}>
                <img src={facebook} alt=""/>
                <img src={insta} alt=""/>
                <img src={twitter} alt=""/>
                <img src={youtube} alt=""/>
            </div>
            <div className={css.footer_p}>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <p style={{ margin: '20px 100px'}}>© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
    );
};

