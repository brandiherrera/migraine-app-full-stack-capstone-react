import React from 'react'
import RecordContext from '../context/record-context'
import PrivateRoute from '../components/utils/PrivateRoute'
// import PublicOnlyRoute from '../components/utils/PublicOnlyRoute'
import Stats from '../components/stats'
import Tracker from '../components/tracker'
// import Signup from '../components/signup'
// import Login from '../components/login'
import RecordMigraine from '../components/record-migraine'
import RecordApiService from '../services/record-api-service'
import './dashboard.css'

export default class Dashboard extends React.Component {
    // static contextType = RecordContext;
    state = {
        records: [],
        date: '',
        location: '',
        time: '',
        onset: '',
        intensity: '',
        trigger: '',
        symptom: '',
        treatment: '',
        comment: '',
        error: null,
    }


    setError = error => {
        console.error(error)
        this.setState({ error: true })
    }

    addRecord = record => {
        this.setState({
            records: [...this.state.records, record],
        })
    }

    deleteRecord = recordId => {
        const newRecords = this.state.records.filter(rec =>
            rec.id !== recordId
        )
        this.setState({
            records: newRecords
        })
    }

    updateRecord = updatedRecord => {
        this.setState({
            records: this.state.records.map(rec =>
                (rec.id !== updatedRecord.id) ? rec : updatedRecord)
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        // RecordApiService.getUserRecords()
        //     .then(resJson =>
        //         this.setState({
        //             records: resJson
        //         }))
        RecordApiService.getUserStats()
            .then(resJson =>
                this.setState({
                    date: resJson.date,
                    location: resJson.location,
                    time: resJson.time,
                    onset: resJson.onset,
                    intensity: resJson.intensity,
                    trigger: resJson.trigger,
                    symptom: resJson.symptom,
                    treatment: resJson.treatment,
                    comment: resJson.comment,
                }))
            .catch(error => this.setState({ error }))
    }

    render() {
        console.log(this.context);
        console.log(this.state);
        const contextValue = {
            date: this.state.date,
            location: this.state.location,
            time: this.state.time,
            onset: this.state.onset,
            intensity: this.state.intensity,
            records: this.state.records,
            trigger: this.state.trigger,
            symptom: this.state.symptom,
            treatment: this.state.treatment,
            comment: this.state.comment,
            addRecord: this.addRecord,
            deleteRecord: this.deleteRecord,
            updateRecord: this.updateRecord,
            addUser: this.addUser,
        }
        console.log(contextValue);

        return (
            <RecordContext.Provider value={contextValue}>
                <div className='dashboard'>
                    <h2 className='dashboard-title'>My Dashboard</h2>
                    <Stats
                        // data={this.context}
                    />
{/* <PublicOnlyRoute
              path='/signup'
              component={Signup}
            />
            <PublicOnlyRoute
              path='/login'
              component={Login}
            /> */}
            <PrivateRoute
              path={'/stats'}
              component={Stats}
            />
            <PrivateRoute
              path='/new-record'
              component={RecordMigraine}
            />
            <PrivateRoute
              path={'/tracker'}
              component={Tracker}
            />
            {/* <PrivateRoute
              path='/edit/:recordId'
              component={EditRecord}
            /> */}
                </div>
            </RecordContext.Provider>
        )
    }
}