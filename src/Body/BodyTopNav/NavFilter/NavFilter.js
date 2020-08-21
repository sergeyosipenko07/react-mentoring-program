import React from "react";

import "./NavFilter.scss"
import { NavFilterItem } from "./NavFilterItem/NavFilterItem";

export const NavFilter = () => {
    return (
        <nav className='navFilter'>
            <NavFilterItem genre='All'/>
            <NavFilterItem genre='Documentary'/>
            <NavFilterItem genre='Comedy'/>
            <NavFilterItem genre='Horror'/>
            <NavFilterItem genre='Crime'/>
        </nav>
    )
}