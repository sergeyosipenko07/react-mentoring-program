import React from "react";

import "./BodyTopNav.scss"
import { NavFilter } from "./NavFilter/NavFilter";
import { NavSorting } from "./NavSorting/NavSorting";

export const BodyTopNav = () => {
    return (
        <div className='top-nav-container'>
            <NavFilter />
            <NavSorting />
        </div>
    )
}