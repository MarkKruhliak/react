import React from 'react';
import css from "../movies.module.css"
import {AllMovies} from "../AllMovies/AllMovies";

import ryan from "../../images/Picture.png"
import timothee from "../../images/Picture (1).png"
import chloe from "../../images/Picture (2).png"
import keanu from "../../images/Container.png"
import {Outlet} from "react-router-dom";


export const Main = () => {


    return (
        <div className={css.main}>
            <Outlet/>
            <div className={css.main_header}>
                <h2>Featured Movie</h2>
                <p>See more</p>
            </div>
            <AllMovies/>
            <div className={css.main_footer}>
                <h2>Featured Casts</h2>
                <p>See more</p>
            </div>
            <div className={css.main_movies_footer} style={{fontSize: '18px'}}>
                <div>
                    <img src={keanu} alt=""/>
                    <p>Keanu Reeves</p>
                </div>
                <div>
                    <img src={ryan} alt=""/>
                    <p>Ryan Reynolds</p>
                </div>
                <div>
                    <img src={timothee} alt=""/>
                    <p>Timothée Chalamet</p>
                </div>
                <div>
                    <img src={chloe} alt=""/>
                    <p>Chloë Grace Moretz</p>
                </div>
            </div>
        </div>
    );
};

