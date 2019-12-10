import React from 'react'
import ValidationError from './validation-error'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
        }
    }

    handleLoginSuccess = () => {
        // const { location, history } = this.props
        // console.log(this.props)
        // const destination = (location.state || {}).from || '/'
        // history.push(destination)
        window.location = '/dashboard'
      }

    updateEmail(email) {
        this.setState({ email: { value: email, touched: true } });
    }

    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } });
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(this.state)
    //     const { email, password } = this.state;

    //     console.log('Email: ', email.value)
    //     console.log('Password: ', password.value);

    //     const login = {
    //         email: email.value,
    //         password: password.value,
    //     }

    //     //potentially submit these values to the server here
    //     this.props.onLogin(login)
    // }

    // handleSubmitBasicAuth = e => {
    //     e.preventDefault()
    //     const { email, password } = e.target

    //     TokenService.saveAuthToken(
    //         TokenService.makeBasicAuthToken(email.value, password.value)
    //     )

    //     email.value = ''
    //     password.value = ''
    //     this.props.onLoginSuccess()
    // }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target

        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    validateEmail(fieldValue) {
        const email = this.state.email.value.trim();
        if (email.length === 0) {
            return 'Email is required';
        } else if (email.length < 5) {
            return 'Email must be at least 5 characters long';
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
            return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
            return 'Password must contain at least one number';
        }
    }
    render() {

        return (
            <div className='login-page'>
                <h3>Login</h3>
                <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className='login-control' type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)} />
                        {this.state.email.touched && (<ValidationError message={this.validateEmail()} />)}
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='login-control' type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} />
                        {this.state.password.touched && (<ValidationError message={this.validatePassword()} />)}
                    </div>
                    <button type='submit'>
                        {/* <Link to='dashboard'> */}
                        Log in
                        {/* </Link> */}
                    </button>
                </form>
            </div>
        )
    }

}