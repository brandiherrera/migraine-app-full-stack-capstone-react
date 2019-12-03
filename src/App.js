import React from 'react';
import { Route } from 'react-router-dom'
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

const records = [
  {
    id: '1',
    date: '01/10/2019',
    triggers: 'lack of sleep',
    symptoms: 'prodrome',
    treatments: 'caffeine',
    comments: 'level 7 pain'
  },
  {
    id: '2',
    date: '08/15/2019',
    triggers: 'food',
    symptoms: 'aura',
    treatments: 'medicine, sleep',
    comments: 'came on while sleeping '
  },
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
      //   firstName: {
      //     value: ''
      // },
      // lastName: {
      //     value: ''
      // },
      // email: {
      //     value: ''
      // },
      // password: {
      //     value: ''
      // },
      // repeatPassword: {
      //     value: ''
      // },
      login,
      records,
      error: null,
    }
  }

  // static defaultProps = {
  //   data: {
  //     logs: [],
  //   }
  // }

  addRecord = (record) => {
    this.setState({
      records: [...this.state.records, record],
    });
  }

  onLogin = (loginUser) => {
    // this.setState({
    //   login: loginUser
    // })
    console.log(loginUser)
  }

  render() {
    // const { records } = this.state
    console.log(this.state.records);

    return (
      <div className='App'>
        <div className='app-nav'>
          <Navbar />
        </div>
        <main className="App">
          <Route exact path='/' component={Header} />
          <Route path='/signup' render={(props) => <Signup {...this.state} />} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/stats' component={Stats} />
          <Route
            path='/record-migraine'
            render={(props) => {
              // console.log(props)
              return <RecordMigraine
                onAddRecord={this.addRecord}
              />
            }
            }
          />
          <Route path='/log' render={(props) => <Log {...this.state} />} />
          <Route path='/explore' component={Explore} />
        </main>

        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
