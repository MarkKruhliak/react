import React, {useEffect, useState} from 'react';
import {movieServices} from "../../services/movie.services";
import OneMovie from "../OneMovie/OneMovie";

const Movies = () => {

    const [movie, setMovie] = useState([])
    console.log(movie)

    useEffect(() => {
        movieServices.getMovies().then(value => setMovie(value))
    }, [])

    return (
        <div>
            {movie.map(value => <OneMovie key={value.id} movie={value}/>)}
        </div>
    );
};

export default Movies;

