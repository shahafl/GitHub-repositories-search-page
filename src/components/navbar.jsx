import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to={"/"} className="navbar-brand">
                    GitHub Repository Search Page
                </Link>
                <Link to={"/Bookmarks"} className="nav-link">
                    Bookmarks
                </Link>
            </nav>
        </header>
    );
}
 
export default NavBar;