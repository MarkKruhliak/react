import React, {useEffect, useState} from 'react';
import {movieServices} from "../../services/movie.services";

import {FilmList} from "../../components";
import css from "./Home.module.css"

export const Home = () => {

    const [movie, setMovie] = useState([])
    console.log(movie)

    useEffect(() => {
        movieServices.getMovies().then(value => setMovie(value))
    }, [])


    return (
        <div className={css.listWrapper}>
            {movie.map(value => <FilmList key={value.id} movie={value}/>)}
        </div>
    );
};

