import React, {useEffect} from 'react';
import {getAllMovies,  GetOneMovie} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import css from "../movies.module.css"
import {Link} from "react-router-dom";

export const AllMovies = ({ filteredMovies}) => {
    // const {movies} = useSelector(state => state.MovieReducer);
    // console.log(movies)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllMovies())
    // }, [])




    return (
        <div className={css.main_main_movies}>
            {filteredMovies && filteredMovies.map(value =>
                <div>
                    <Link onClick={() => dispatch(GetOneMovie(value.id))}
                          style={{color: 'black', textDecoration: 'none'}} to={'about-film'}>
                        <img style={{width: '250px', height: '370px'}}
                             src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt=""/>
                        <p className={css.main_main_movies_p}>{value.id}</p>
                        <h3 style={{width: '250px', fontSize: '18px', margin: '4px 0'}}>{value.original_title}</h3>
                        <div style={{
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p className={css.main_main_movies_p2}>{value.popularity}</p>
                            <p className={css.main_main_movies_p3}>{value.vote_average}</p>
                        </div>
                    </Link>
                </div>)}
        </div>
    );
};


