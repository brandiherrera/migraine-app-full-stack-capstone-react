import React from 'react'

export default function Login() {
    return (
        <div className='login-page'>
            <h3>Login</h3>
            <form class='login-form'>
                <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>
                    {/* TODO edit link <a href */}
                    <a href="dashboard.html">Log in</a></button>
            </form>
        </div>
    )
}