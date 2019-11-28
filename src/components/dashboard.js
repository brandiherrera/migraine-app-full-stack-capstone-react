import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../components/stats';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <section className="my-stats">
                <h3>View my stats</h3>
            </section>
            <Stats />
            <h3><Link to="/record-migraine">Record a Migraine</Link></h3>
            <h3><Link to="/log">View Migraine Log</Link></h3>
            <h3><Link to="/explore">Explore Migraine News</Link></h3>

        </div>
    )
}