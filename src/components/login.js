import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    // static defaultProps = {
    //     onLogin: () => {}
    // };

    // constructor(props) {
    //     super(props);
    //     this.
        state = {
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    // }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const { email, password } = this.state;

        console.log('Email: ', email.value)
        console.log('Password: ', password.value);

        const login = {
            email: email.value,
            password: password.value,
        }

        //potentially submit these values to the server here
        this.props.onLogin(login)
    }

    updateEmail(email) {
        this.setState({ email: { value: email } });
    }

    updatePassword(password) {
        this.setState({ password: { value: password } });
    }

    render() {

        return (
            <div className='login-page'>
                <h3>Login</h3>
                <form className='login-form' onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className='login-control' type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='login-control' type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} />
                    </div>
                    <button type='submit'>
                        <Link to='dashboard'>Log in</Link></button>
                </form>
            </div>
        )
    }

}