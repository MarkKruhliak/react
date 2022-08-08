import React from 'react';
import css from "../movies.module.css"
import {AllMovies} from "../AllMovies/AllMovies";

export const Main = () => {


    return (
        <div className={css.main}>
            <div className={css.main_header}>
                <h2>Featured Movie</h2>
                <p>See more</p>
            </div>
            <div>
                <AllMovies/>
            </div>
        </div>
    );
};

