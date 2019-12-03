import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login-page'>
            <h3>Login</h3>
            <form className='login-form'>
                <div>
                    <label htmlFor='username'>Email</label>
                    <input type='text' name='username' id='username' />
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