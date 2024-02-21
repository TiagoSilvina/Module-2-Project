import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/"><h3>Home </h3></NavLink>
            <NavLink to="/about"><h3> About</h3></NavLink>
            <NavLink to="/cars"><h3> Buy</h3></NavLink>
            <NavLink to="/add-car"><h3> Sell</h3></NavLink>
            <NavLink to="/favorites"><h3> Favorites</h3></NavLink>
        </nav>
    );
}
export default Navbar;