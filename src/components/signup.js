import React from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends React.Component {
    static defaultProps = {
        onLogin: () => {}
    };

    // constructor(props) {
    //     super(props);
    //     this.
        state = {
            firstName: {
                value: ''
            },
            lastName: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            },
            repeatPassword: {
                value: ''
            }
        }
    // }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const { firstName, lastName, email, password, repeatPassword } = this.state;
    
        console.log('First Name: ', firstName.value);
        console.log('Last Name: ', lastName.value);
        console.log('Email: ', email.value)
        console.log('Password: ', password.value);
        console.log('Repeat Password: ', repeatPassword.value);
    
        const login = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
        }
        //potentially submit these values to the server here
        this.props.onLogin(login)
      }

    updateFirstName(firstName) {
        this.setState({ firstName: { value: firstName } });
    }

    updateLastName(lastName) {
        this.setState({ lastName: { value: lastName } });
    }

    updateEmail(email) {
        this.setState({ email: { value: email } });
    }

    updatePassword(password) {
        this.setState({ password: { value: password } });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({ repeatPassword: { value: repeatPassword } });
    }
    render() {

        return (
            <div className='signup-page' >
                <h3>Signup</h3>
                <form className='signup-form' onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor='first-name'>First name</label>
                        <input className='registration-control' placeholder='First Name' type='text' name='first-name' id='first-name' onChange={e => this.updateFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='last-name'>Last name</label>
                        <input className='registration-control' type='text' name='last-name' id='last-name' placeholder='Last Name' onChange={e => this.updateLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className='registration-control' type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='registration-control' type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='repeat-password'>Repeat Password</label>
                        <input className='registration-control' type='password'
                            name='repeatPassword' id='repeatPassword' onChange={e => this.updateRepeatPassword(e.target.value)} />
                    </div>
                    <button type='submit'><Link to='dashboard'>Sign up</Link></button>
                </form>
            </div>
        )
    }
}