import React from 'react';
import { Route } from 'react-router-dom'
// import { ReactRouter } from 'react-router'
import './App.css';

import Navbar from './components/navbar';
import Header from './components/header';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Stats from './components/stats'
import RecordMigraine from './components/record-migraine';
import Log from './components/log';
import Explore from './components/explore';
import Footer from './components/footer';


export default class App extends React.Component {
  static defaultProps = {
    data: {
      logs: [],
    }
  }
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div className='App'>
        <div className='app-nav'>
          <Navbar />
        </div>
        <main className="App">
          {/* <ReactRouter> */}
            <Route exact path='/' component={Header} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/stats' component={Stats} />
            <Route path='/record-migraine' component={RecordMigraine} />
            <Route path='/log' render={(props) => <Log {...data} /> } />
            <Route path='/explore' component={Explore} />
          {/* </ReactRouter> */}
        </main>

        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }

}
