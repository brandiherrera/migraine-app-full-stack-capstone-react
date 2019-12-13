import React from 'react'
import RecordContext from '../context/record-context'
import RecordApiService from '../services/record-api-service'
import { Link, /*Router*/ } from 'react-router-dom';
// import Tracker from './tracker'
import Stats from '../components/stats';
import './dashboard.css';
// import RecordMigraine from './record-migraine';

// export default function Dashboard(props) {
export default class Dashboard extends React.Component {
    static contextType = RecordContext;

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // data: [],
    //         trigger: '',
    //         symptom: '',
    //         // treatment: '',

    //     }
    // }
    // getStats = (e) =>{

    //     componentDidMount() {
    //     console.log('getStats() running')
    //     RecordApiService.getUserStats()

    //         .then(data => {
    //             console.log(data)

    //             this.setState({
    //                 trigger: /*Object.values(*/this.context.trigger/*)*/,
    //                 // data: data
    //             })
    //             })
    //             // )
    //         .catch(error => this.setState({ error }))
    // }

    // renderNewStats(data) {
    //     const oldStats = this.state.data
    //     if (data !== oldStats) {
    //         this.setState({
    //             data: data
    //         })
    //     }
    // }

    render() {
        // console.log(this.state);
        console.log(this.context);
        // const newStats = this.state.data.map(())

        return (
            // <Router>
            <div className='dashboard'>

                <h2>Dashboard</h2>
                {/* {this.getStats()} */}
                {/* <h5>
                    {stats.trigger} 
                    {this.context.trigger} triggers your migraines [XX]% of the time.
                    </h5> */}
                <Stats data={this.context} />
                <h3>
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
                    {/* <Tracker /> */}
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
}
