import React from "react";

import "./Body.scss"
import { BodyTopNav } from "./BodyTopNav/BodyTopNav";
import { FilmCounter } from "./FilmCounter/FilmCounter";
import {FilmList} from "./FilmList/FilmList";

import { movies } from "../mockedFilmList"

export const Body = () => {
    return (
        <div className='body-container'>
            <div className="body-container__wrapper">
                <BodyTopNav />
                <FilmCounter count ={movies.length}/>
                <FilmList movies={movies}/>
            </div>
        </div>
    )
}