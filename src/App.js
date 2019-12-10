import React from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/navbar';
import PrivateRoute from './components/utils/PrivateRoute'
import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import Header from './components/header';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Stats from './components/stats'
import RecordMigraine from './components/record-migraine';
import Tracker from './components/tracker';
// import Explore from './components/explore';
import Footer from './components/footer';
import config from './config';
import './App.css';
import RecordApiService from './services/record-api-service';

const records = [];
// const login = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // login,
      records,
      error: null,
    }
  }

  setError = error => {
    console.error(error)
    this.setState({ error: true })
  }

  // setRecords = records => {
  //   this.setState({
  //     records,
  //     errors: null,
  //   })
  // }

  addRecord = record => {
    this.setState({
      records: [...this.state.records, record],
    });
  }

deleteRecord = recordId => {
  const newRecords = this.state.records.filter(rec =>
    rec.id !== recordId
    )
    this.setState({
      records: newRecords
    })
}

  onLogin = (loginUser) => {
    console.log(loginUser)
    this.setState({
      login: { loginUser }
    })
  }

  componentDidMount() {
    console.log('did')
    RecordApiService.getRecords()

  //     // fetch(`${config.API_ENDPOINT}/records`, {
  //     //   method: 'GET',
  //     //   headers: {
  //     //     'content-type': 'application/json',
  //     //   }
  //     // })
  //     // .then(res => {
  //     //   if (!res.ok) {
  //     //     throw new Error(res.status)
  //     //   }
  //     //   return res.json()
  //     // })

  //     // .then(this.setRecords)
  //     // .then(this.setState)

  //     // .then(data => this.setState({records: data}))
      .then(resJson =>
        this.setState({
          records: resJson
        }))

      .catch(error => this.setState({ error }))
  }

  render() {
    const { records } = this.state
    console.log(records);
    // console.log(this.state.login);
    return (
      <div className='App'>
        <div className='app-nav'>
          <Navbar />
        </div>
        <main className="App">
          <Route exact path='/' component={Header} />
          <PublicOnlyRoute
          // <Route
            // path={'/signup'}
            path='/signup'
            // render={(props) =>
            //   <Signup
            //     {...this.state}
            //     onLogin={this.onLogin}
            //   />}
            component={Signup}
            />
            
          {/* <PublicOnlyRoute
          // <Route
            path={'/login'}
            render={(props) =>
              <Login
                {...this.state}
                onLogin={this.onLogin}
              />}
            /> */}
          <PublicOnlyRoute
          // <Route
            path='/login'
            // render={(props) =>
            //   <Login
            //     {...this.state}
            //     onLogin={this.onLogin}
            //   />}
            component={Login}
            />
          <PrivateRoute 
          // <Route
            path={'/dashboard'}
            component={Dashboard} 
            />
          {/* <PrivateRoute */}

          {/* <Route
            path={'/stats'}
            component={Stats} 
            /> */}

          <PrivateRoute
          // <Route
            path='/new-record'
            // render={(props) => {
            //   // console.log(props)
            //   return <RecordMigraine
            //     onAddRecord={this.addRecord}
            //     onSetError={this.setError}
            //   />
            // }
            // }
            component={RecordMigraine}
          />
          {/* <PrivateRoute  */}
          <Route
            path={'/tracker'}
            render={(props) => { 
              return <Tracker 
                {...props}
                records={records} 
                onDeleteRecord={this.deleteRecord}
              /> }}
            // component={Tracker}
            />
          {/* <Route path='/explore' component={Explore} /> */}
        </main>

        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
