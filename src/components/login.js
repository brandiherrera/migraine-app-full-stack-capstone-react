import React from 'react'
import ValidationError from './validation-error'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import RecordContext from '../context/record-context'

export default class Login extends React.Component {
    static contextType = RecordContext;

    static defaultProps = {
        onAddUser: () => { },
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
        // console.log(user.id)
        // const destination = (location.state || {}).from || '/'
        // history.push(destination)
        // this.setState({ user: user.id })
        window.location = '/dashboard'
      }

    updateEmail(email) {
        this.setState({ email: { value: email, touched: true } });
    }

    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } });
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        // console.log(ev.target)
        this.setState({ error: null })
        const { email, password } = ev.target
        const user = {
            email: email.value,
            password: password.value,
        }
        console.log(user)
        // AuthApiService.postLogin(/*user.id, */email.value, password.value)
        // console.log(user.id)
        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
            // user
        })
        // .then(this.props.onAddUser(user))
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                // Need the individual user_id here, not 2
                TokenService.saveUserId(2)
                window.location = '/dashboard'
            
            })
            .then()
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    validateEmail() {
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
                        <input className='login-control' type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)} defaultValue='michael@dunder.com' />
                        {this.state.email.touched && (<ValidationError message={this.validateEmail()} />)}
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='login-control' type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} defaultValue='password1' />
                        {this.state.password.touched && (<ValidationError message={this.validatePassword()} />)}
                    </div>
                    <button type='submit'>
                        Log in
                    </button>
                </form>
            </div>
        )
    }

}