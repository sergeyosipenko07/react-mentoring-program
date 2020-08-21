import React from "react";
import PropTypes from "prop-types";

import "./NavFilterItem.scss"

export const NavFilterItem = (props) => {
    return (
        <>
            <div className='navFilterItem'>{props.genre}</div>
        </>
    )
}

NavFilterItem.propTypes = {
    genre: PropTypes.string.isRequired
}