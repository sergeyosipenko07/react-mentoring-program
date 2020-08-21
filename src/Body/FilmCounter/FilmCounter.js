import React from "react";
import PropTypes from "prop-types";

import "./FilmCounter.scss"

export const FilmCounter = (props) => {
    return (
        <>
            <div className='filmCounter'><strong>{props.count}</strong> movies found</div>
        </>
    )
}

FilmCounter.propTypes = {
    count: PropTypes.string.isRequired
}