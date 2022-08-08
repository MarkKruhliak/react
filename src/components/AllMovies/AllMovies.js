import React, {useEffect} from 'react';
import {getAllMovies} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

export const AllMovies = () => {
    const {movies} = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMovies())
    },[])

    return (
        <div>
            {movies && movies.map(value=> <div>
                <img style={{width: '250px', height: '370px'}} src={value.poster_path} alt=""/>
                <p></p>
                <h3></h3>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>)}
        </div>
    );
};


