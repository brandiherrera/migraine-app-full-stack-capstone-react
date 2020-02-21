import React from 'react'
import { Route } from 'react-router-dom'
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
import './App.css'

export default class App extends React.Component {

  render() {

    return (
      <div className='App'>
        <div className='app-nav'>
          <Navbar />
        </div>
        <main className="App" id="App">
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
    )
  }
}