import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { AuthContext } from '../../context/auth-context';

import './MainNavigation.css';

const MainNavigation = props => {
    const auth = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to={auth.isLoggedIn ? "/u1/myLists" : '/home'}>To-do List</NavLink>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <NavLinks />
        </nav>
    );
};

export default MainNavigation;