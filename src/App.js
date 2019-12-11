import React from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/navbar';
import PrivateRoute from './components/utils/PrivateRoute'
import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import Header from './components/header';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
// import Stats from './components/stats'
import RecordMigraine from './components/record-migraine';
import Tracker from './components/tracker';
// import Explore from './components/explore';
import Footer from './components/footer';
// import config from './config';
import './App.css';
import RecordApiService from './services/record-api-service';
import RecordContext from './context/record-context';

// const records = [];
// const login = [];

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.
  state = {
    // user: '',
    records: [],
    error: null,
  }
  // }

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

  addUser = user => {
    this.setState({
      user: [...this.state.user, user],
    });
  }

  // onLogin = (loginUser) => {
  //   console.log(loginUser)
  //   this.setState({
  //     login: { loginUser }
  //   })
  // }

  componentDidMount() {
    console.log('did')
    // RecordApiService.getRecords()
    RecordApiService.getUserRecords()
      .then(resJson =>
        this.setState({
          records: resJson
        }))

      .catch(error => this.setState({ error }))
  }

  render() {
    const { records } = this.state
    console.log(this.state);
    const contextValue = {
      user: this.state.user,
      records: this.state.records,
      addRecord: this.addRecord,
      deleteRecord: this.deleteRecord,
      addUser: this.addUser,
    }

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
          <RecordContext.Provider value={contextValue}>
            <Route
              path={'/tracker'}
              // render={(props) => {
              //   return <Tracker
              //     {...props}
              //     records={records}
              //     onDeleteRecord={this.deleteRecord}
              //   />
              // }}
            component={Tracker}
            />
          </RecordContext.Provider>
          {/* <Route path='/explore' component={Explore} /> */}
        </main>

        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
