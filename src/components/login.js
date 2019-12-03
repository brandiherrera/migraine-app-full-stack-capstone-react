import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: {
            value: ''
          },
          password: {
            value: ''
          }
        }
      }


    render() {

          
        return (
            <div className='login-page'>
                <h3>Login</h3>
                <form className='login-form'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <button type='submit'>
                        <Link to='dashboard'>Log in</Link></button>
                </form>
            </div>
        )
    }

}