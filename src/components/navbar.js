import React from 'react';
import { NavLink, /*Router*/ } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        // <Router>
        <nav className='nav' id='nav'>
            <NavLink to='/dashboard' className='nav-link home' id='home'>
                My-Brain Tracker
            </NavLink>
            <NavLink to='/new-record' className='nav-link record'>
                Record a Migraine
            </NavLink>
            <NavLink to='/tracker' className='nav-link tracker'>
                View Tracker
            </NavLink>
            <NavLink to='/logout' className='nav-link logout'>
                Logout
            </NavLink>
        </nav>
        // </Router>
    )
}