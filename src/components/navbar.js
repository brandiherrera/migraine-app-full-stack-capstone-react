import React from 'react';
import TokenService from '../services/token-service'
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <NavLink to='/dashboard' className='nav-link-home' id='home'>
                    My-Brain Tracker
                </NavLink>
                <div className='Header__right'>
                <NavLink to='/new-record' className='nav-link'>
                    Record a Migraine
                </NavLink>
                <NavLink to='/tracker' className='nav-link'>
                    View Tracker
                </NavLink>
                <NavLink
                    className='nav-link logout'
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </NavLink>
                </div>
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
            <nav className='nav' id='nav'>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        )
    }
}