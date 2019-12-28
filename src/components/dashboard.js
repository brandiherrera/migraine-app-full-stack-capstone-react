import React from 'react'
import RecordContext from '../context/record-context'
import Stats from '../components/stats'
import './dashboard.css'

export default class Dashboard extends React.Component {
    static contextType = RecordContext;

    render() {
        console.log(this.context)

        return (
            <div className='dashboard'>
                <h2 className='dashboard-title'>My Dashboard</h2>
                <Stats
                    data={this.context}
                />
            </div>
        )
    }
}