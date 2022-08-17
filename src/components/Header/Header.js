import React, {useEffect, useState} from 'react';
import css from "../movies.module.css"
import {MovieService} from "../../redux/services/movie.service"

import photo from "../../images/LOGO.png"
import search from "../../images/Search (1).png"
import menu from "../../images/Menu.png"
import rating from "../../images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
import rating2 from "../../images/PngItem_1381056 1.png"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


export const Header = () => {

    // const {filteredMovie} = useSelector(state => state.MovieReducer);
    //
    // const dispatch = useDispatch();x
    //
    const [filterStay, setFilterStay] = useState([]);
    const [users, setUsers] = useState([{name: 'Mark', age: 12}]);

    console.log(users);
    // console.log(filterStay);
    //
    // useEffect(() => {
    //     MovieService.getAll().then(value => setUsers(value))
    // }, [])
    //
    // // console.log(movies);
    //
    //
    const changeInput = (e) => {
        let allMovies = [...users]
        console.log(allMovies);
        let filteredMovies = allMovies.filter(value => value.name.toUpperCase().includes(e.target.value.toUpperCase()))

        setFilterStay(filteredMovies)
        // let filter = filteredUsers.filter(value => value.username.toUpperCase().includes(e.target.value.toUpperCase()))
        // console.log(filter)
        // setUsers(filter)
    }

    return (
        <div>
            <div className={css.header_top}>
                <Link to={'/'}>
                    <img src={photo} alt=""/>
                </Link>

                <input className={css.header_top_input} src={search} type="search" onChange={changeInput} />

                <img src={menu} style={{height: '36px'}} alt=""/>
            </div>
            <div className={css.header_bottom}>
                <h1 className={css.header_bottom_h1}>John Wick 3: Parabellum</h1>
                <div className={css.header_bottom_rating}>
                    <p style={{}}>86.0/100<img src={rating} alt=""/></p>
                    <p>97%<img src={rating2} alt=""/></p>
                </div>
                <p style={{fontSize: '14px', margin: '10px 0'}}>John Wick is on the run after killing a member of the
                    international assassins' guild, and with a $14 million price tag on his head, he is the target of
                    hit men and women everywhere.</p>
                <button className={css.header_bottom_button}>Watch Trailer
                </button>
                {filterStay && filterStay.map(value => <div>{value.username}</div>)}
            </div>
        </div>


    );
};

