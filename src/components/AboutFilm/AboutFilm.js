import React from 'react';
import {Outlet} from "react-router-dom";


export const AboutFilm = () => {
    return (
        <div>
            <h1>Hello word</h1>
            <Outlet/>
        </div>
    );
};

