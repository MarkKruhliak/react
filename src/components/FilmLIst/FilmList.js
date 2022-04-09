import React from 'react';

import css from "./FilmList.module.css"

export const FilmList = ({movie}) => {

    // adult: false
    // backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
    // genre_ids: (3) [28, 12, 878]
    // id: 634649
    // original_language: "en"
    // original_title: "Spider-Man: No Way Home"
    // overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    // popularity: 5383.752
    // poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    // release_date: "2021-12-15"
    // title: "Spider-Man: No Way Home"
    // video: false
    // vote_average: 8.3
    // vote_count: 9110
    const {original_title,overview,release_date,vote_average,vote_count,poster_path}=movie


    return (
        <div className={css.root}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt=""/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <span>Rating: {vote_average} (total votes: {vote_count})</span>
                <p>{overview}</p>
                <span>Release data: {release_date}</span>
            </div>

        </div>
    );
};

