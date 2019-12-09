import React from 'react';
// import RecordApiService from '../services/record-api-service'
import { Link, /*Router*/ } from 'react-router-dom';
import Tracker from './tracker'
import Stats from '../components/stats';
import './dashboard.css';

// const records = [];
export default function Dashboard(props) {
// export default class Dashboard extends React.Component {
//     componentDidMount() {
//         console.log('did')
//         RecordApiService.getRecords()
//           .then(resJson =>
//             this.setState({
//               records: resJson
//             }))
    
//           .catch(error => this.setState({ error }))
//       }
//     render() {

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
                {/* <Route
            path={'/tracker'}
            render={(props) => { 
              return <Tracker 
                records={records} 
              /> }}>View Tracker</Route> */}
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
// }
