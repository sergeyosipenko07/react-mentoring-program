import React from "react";

import "./NavSorting.scss"

export const NavSorting = () => {
    return (
        <div className='nav-sorting'>
            <div className="nav-sorting__label">sort by</div>

            <div className="nav-sorting__dropdown">
                <div className="nav-sorting__dropdown-btn">Release date</div>
                <div className="nav-sorting__dropdown-content">
                    <div className="nav-sorting__dropdown-content--item">Release date</div>
                    <div className="nav-sorting__dropdown-content--item">Name</div>
                </div>
            </div>
        </div>
    )
}