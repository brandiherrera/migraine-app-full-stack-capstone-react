import React from 'react'
import { Route } from 'react-router-dom'
import RecordContext from './context/record-context'
import Navbar from './components/navbar'
import PrivateRoute from './components/utils/PrivateRoute'
import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import Header from './components/header'
import Signup from './components/signup'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Stats from './components/stats'
import RecordMigraine from './components/record-migraine'
import EditRecord from './components/edit-record'
import Tracker from './components/tracker'
import Footer from './components/footer'
import RecordApiService from './services/record-api-service'
import './App.css'

export default class App extends React.Component {
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
    RecordApiService.getUserRecords()
      .then(resJson =>
        this.setState({
          records: resJson
        }))
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
    console.log(this.state)
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

    return (
      <RecordContext.Provider value={contextValue}>
        <div className='App'>
          <div className='app-nav'>
            <Navbar />
          </div>
          <main className="App">
            <Route exact path='/' component={Header} />
            <PublicOnlyRoute
              path='/signup'
              component={Signup}
            />
            <PublicOnlyRoute
              path='/login'
              component={Login}
            />
            <PrivateRoute
              path={'/dashboard'}
              component={Dashboard}
            />
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
            <PrivateRoute
              path='/edit/:recordId'
              component={EditRecord}
            />
          </main>

          <div className='app-footer'>
            <Footer />
          </div>
        </div>
      </RecordContext.Provider>
    )
  }
}