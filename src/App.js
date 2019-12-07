import React from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/navbar';
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

const records = [
  // {
  //   id: '1',
  //   date: '01/10/2019',
  //   triggers: 'lack of sleep',
  //   symptoms: 'prodrome',
  //   treatments: 'caffeine',
  //   comments: 'level 7 pain'
  // },
  // {
  //   id: '2',
  //   date: '08/15/2019',
  //   triggers: 'food',
  //   symptoms: 'aura',
  //   treatments: 'medicine, sleep',
  //   comments: 'came on while sleeping '
  // },
  // {
  //     id: '3',
  //     date: '11/01/2019',
  //     triggers: 'dehydration',
  //     symptoms: 'blurred vision, headache prior',
  //     treatments: 'caffeine, medicine',
  //     comments: 'dark room helped'
  // },
];
const login = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login,
      records,
      error: null,
    }
  }

  setError = error => {
    console.error(error)
    this.setState({ error: true })
  }

  setRecords = records => {
    this.setState({
      records,
      errors: null,
    })
  }

  addRecord = record => {
    this.setState({
      records: [...this.state.records, record],
    });
  }

  onLogin = (loginUser) => {
    console.log(loginUser)
    this.setState({
      login: {loginUser}
    })
  }

  componentDidMount() {
    console.log('did')
    RecordApiService.getRecords()
    
    // fetch(`${config.API_ENDPOINT}/records`, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //   }
    // })
    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error(res.status)
    //   }
    //   return res.json()
    // })

    // .then(this.setRecords)
    // .then(this.setState)

    // .then(data => this.setState({records: data}))
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
          <Route 
            path='/signup' 
            render={(props) => 
              <Signup 
              {...this.state}
              onLogin={this.onLogin}
               />} 
            />
          <Route 
            path='/login' 
            render={(props) => 
              <Login 
                {...this.state}
                onLogin={this.onLogin}
                 />} 
          />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/stats' component={Stats} />
          <Route
            path='/new-record'
            render={(props) => {
              // console.log(props)
              return <RecordMigraine
                        onAddRecord={this.addRecord}
                        onSetError={this.setError}
                      />
            }
            }
          />
          <Route path='/tracker' 
          render={(props) => {return <Tracker records={records}/>}}
          // render={(props) => <Log {...this.state} />} 
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
