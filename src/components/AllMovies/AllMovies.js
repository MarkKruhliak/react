import React from 'react';

export const AllMovies = ({movie}) => {
    const {release_date, overview, id} = movie;

    return (
        <div>
            {release_date}) -- {id} -- {overview}
            <hr/>
        </div>
    );
};


