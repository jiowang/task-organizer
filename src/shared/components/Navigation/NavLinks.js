import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
            {!auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/home' className="nav-link py-3 px-0 px-lg-3 rounded">Home</NavLink>
                </li>
            }
            {!auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/about' className="nav-link py-3 px-0 px-lg-3 rounded">About</NavLink>
                </li>
            }
            {!auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/login' className="nav-link py-3 px-0 px-lg-3 rounded">Login</NavLink>
                </li>
            }
            {auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/u1/myLists' className="nav-link py-3 px-0 px-lg-3 rounded">Home</NavLink>
                </li>
            }
            {auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/u1/settings' className="nav-link py-3 px-0 px-lg-3 rounded">Settings</NavLink>
                </li>
            }
            {auth.isLoggedIn &&
                <li class="nav-item mx-0 mx-lg-1">
                    <NavLink to='/home' className="nav-link py-3 px-0 px-lg-3 rounded" onClick={auth.logout}>Logout</NavLink>
                </li>
            }
            </ul>
        </div>
    );
};

export default NavLinks;