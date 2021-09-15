import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {
    return (
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/home' className="nav-link py-3 px-0 px-lg-3 rounded">Home</NavLink>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/about' className="nav-link py-3 px-0 px-lg-3 rounded">About</NavLink>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/login' className="nav-link py-3 px-0 px-lg-3 rounded">Login</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;