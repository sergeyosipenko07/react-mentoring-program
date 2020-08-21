import React from "react";
import "./Search.scss"

export const Search = () => {
    return (
        <>
            <h2 className='search-title'>Find your movie</h2>
            <div className='search-container'>
                <input placeholder="What do you want to watch?" className='search-container__search-field'></input>
                <div className='search-container__search-button'>SEARCH</div>
            </div>
        </>
    )
}