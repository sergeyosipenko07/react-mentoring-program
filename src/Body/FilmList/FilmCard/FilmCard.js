import React from 'react';

import './FilmCard.scss';


export const FilmCard = (props) => {
    return (
        <div className="film-container">
            <div className="film-container__poster">
                <img src={props.image} alt="Poster"/>
            </div>
            <div className="film-container__description">
                <div className="film-container__description--name">{props.title}</div>
                <div className="film-container__description--release-date">{props.releaseDate}</div>
            </div>
            <div className="film-container__genre">{props.filmGenre}</div>
        </div>
    );
}