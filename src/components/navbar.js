import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className='nav' id='nav'>
            <NavLink to='/dashboard' className='nav-link home'>
                My-Brain Logger
            </NavLink>
            <NavLink to='/record-migraine' className='nav-link record'>
                Record a Migraine
            </NavLink>
            <NavLink to='/log' className='nav-link logger'>
                View Log
            </NavLink>
            <NavLink to='/settings' className='nav-link settings'>
                Settings
            </NavLink>
        </nav>
    )
}