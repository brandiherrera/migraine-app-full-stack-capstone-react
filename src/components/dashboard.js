import React from 'react';
import { Link, /*Router*/ } from 'react-router-dom';
import Stats from '../components/stats';
import './dashboard.css';

export default function Dashboard(props) {
    return (
        // <Router>
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <Stats />
            <h3>
                <Link
                    to='/record-migraine'
                    className='dashboard-link'>
                    Record a Migraine
                </Link>
            </h3>
            <h3>
                <Link 
                    to='/tracker'
                    className='dashboard-link'>
                    View Tracker
                </Link>
            </h3>
            {/* <h3>
                <Link 
                    to='/explore'
                    className='dashboard-link'>
                        Explore Migraine News
                </Link>
            </h3> */}

        </div>
        // </Router>
    )
}