import React from 'react'
import RecordContext from '../context/record-context'
// import RecordApiService from '../services/record-api-service'
// import { Link } from 'react-router-dom';
import Stats from '../components/stats';
import './dashboard.css';

export default class Dashboard extends React.Component {
    static contextType = RecordContext;

    render() {
        console.log(this.context);

        return (
            <div className='dashboard'>
                <h2 className='dashboard-title'>My Dashboard</h2>
                <Stats
                    data={this.context}
                />
                {/* <h3>
                    <Link
                        to='/new-record'
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
                </h3> */}
            </div>
        )
    }
}