import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='landing-page'>
            <h1>My-Brain Logger</h1>
            <h3>An easy-to-use interface for people who suffer from migraines</h3>

            <section className="about-app">
                <h4>Log your triggers, symptoms, remedies, and treatments</h4>
                <h4>Find common occurrences the more you log</h4>
                <h4>Keep your findings private, or share with friends or a healthcare professional</h4>
            </section>

            <section className="log-in">
                <p>Been here before?</p>
                <button><Link to="/login">Log in</Link></button>
                <p>New to My-Brain Logger?</p>
                <button><Link to="/signup">Sign up</Link></button>
            </section>
        </div>
    )
}