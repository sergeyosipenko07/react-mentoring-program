import React from 'react';

import {FilmCard} from "./FilmCard/FilmCard";

import './FilmList.scss';


export const FilmList = ({movies}) => {
    return (
        <div className="filmList">
            {movies.map(movies => (
                <FilmCard
                    title={movies.title}
                    releaseDate={movies.releaseDate}
                    filmGenre={movies.filmGenre}
                    image={movies.image}
                    key={movies.id}/>
            ))
            }
        </div>
    );
}