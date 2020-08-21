import React from "react";
import "./Header.scss"

import { Search } from "./Search/Search"
import { HeaderTop } from "./HeaderTop/HeaderTop";

export const Header = () => {
    return (
        <div className="header-container">
                <HeaderTop />
                <div className="header-container__search-component">
                    <Search />
                </div>
        </div>
    )
}