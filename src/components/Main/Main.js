import React, {useEffect, useState} from 'react';
import css from "../movies.module.css"
import {AllMovies} from "../AllMovies/AllMovies";

import ryan from "../../images/Picture.png"
import timothee from "../../images/Picture (1).png"
import chloe from "../../images/Picture (2).png"
import keanu from "../../images/Container.png"
import {Outlet} from "react-router-dom";
import search from "../../images/Search (1).png";
import {MovieService} from "../../redux";


export const Main = () => {

    const [filterStay, setFilterStay] = useState([]);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        MovieService.getAll().then(value => {
                setMovies([...value])
                setFilterStay([...value])
            }
        )
    }, [])


    const changeInput = (e) => {
        let allMovies = [...movies]

        let filteredMovies = allMovies.filter(value => value.original_title.toUpperCase().includes(e.target.value.toUpperCase()))

        setFilterStay(filteredMovies)

    }


    return (
        <div className={css.main}>
            <div className={css.main_header}>
                <h2>Featured Movie</h2>

                <input style={{color: "black"}} className={css.header_top_input} src={search} type="search" onChange={changeInput}/>
            </div>
            <AllMovies movies={movies} filteredMovies={filterStay}/>
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

