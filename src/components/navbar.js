import React from 'react';
import TokenService from '../services/token-service'
import { NavLink, /*Router*/ } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends React.Component {
    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <NavLink to='/dashboard' className='nav-link home' id='home'>
                    My-Brain Tracker
                </NavLink>
                <NavLink to='/new-record' className='nav-link record'>
                    Record a Migraine
                </NavLink>
                <NavLink to='/tracker' className='nav-link tracker'>
                    View Tracker
                </NavLink>
                <NavLink
                    className='nav-link logout'
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </NavLink>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <NavLink
                    className='nav-link signup'
                    to='/signup'>
                    Sign Up
                </NavLink>
                {/* <Hyph /> */}
                <NavLink
                    className='nav-link login'
                    to='/login'>
                    Log in
                </NavLink>
            </div>
        )
    }

    render() {

        return (
            // <Router>
            <nav className='nav' id='nav'>
                {/* <NavLink to='/logout' className='nav-link logout'> */}
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                {/* </NavLink> */}
            </nav>
            // </Router>
        )
    }
}