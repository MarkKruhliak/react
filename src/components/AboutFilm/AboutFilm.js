import React from 'react';
import css from "../oneMovie.module.css";
import {Link} from "react-router-dom";
import photo from "../../images/LOGO.png";
import search from "../../images/Search (1).png";
import menu from "../../images/Menu.png";
import {useSelector} from "react-redux";


export const AboutFilm = () => {

    const {oneMovie} = useSelector(state => state.MovieReducer);

    console.log(oneMovie)
    return (
        <div className={css.container}>
            <div className={css.layout}>
                <div className={css.header_top}>
                    <Link to={'/'}>
                        <img src={photo} alt=""/>
                    </Link>
                    <input className={css.header_top_input} src={search} type="search"/>
                    <img src={menu} style={{height: '36px'}} alt=""/>
                </div>
                <div className={css.main_page_oneMovie}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200${oneMovie.poster_path}`} alt=""/>
                        <h3 style={{margin: '0px'}}>{oneMovie.original_title}</h3>
                        <div style={{display: 'flex', gap: '40px'}}>
                            <p>{oneMovie.release_date}</p>
                            <p className={css.main_page_oneMovie_p}>{oneMovie.status}</p>
                        </div>
                    </div>
                    <div>
                        <h3>{oneMovie.tagline}</h3>
                        <p>{oneMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

