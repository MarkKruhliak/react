import React, {useState} from 'react';
import css from "../movies.module.css"

import photo from "../../images/LOGO.png"
import search from "../../images/Search (1).png"
import menu from "../../images/Menu.png"
import rating from "../../images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
import rating2 from "../../images/PngItem_1381056 1.png"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FilterArray} from "../../redux";


export const Header = () => {

    const dispatch = useDispatch();
    // const [users, setUsers] = useState([{username: 'Mark'}, {username: 'Jackson'}, {username: 'Murad'}, {username: 'Iran'}]);
    // const [filterStay, setFilterStay] = useState([]);

    const changeInput = (e) => {
            dispatch(FilterArray(e.target.value))
        // let filteredUsers = [...users]
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
                <input className={css.header_top_input} src={search} type="search" onChange={changeInput}/>
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
                {/*{users && users.map(value => <div>{value.username}</div>)}      */}
            </div>
        </div>


    );
};

