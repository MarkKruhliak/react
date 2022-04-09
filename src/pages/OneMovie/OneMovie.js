import React from 'react';

const OneMovie = ({movie}) => {
    const {id, title} = movie;

    return (
        <div>
            <div>{id}) {title}</div>

        </div>
    );
};

export default OneMovie;