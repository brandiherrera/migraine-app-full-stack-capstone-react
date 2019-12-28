import React from 'react'
import { Link } from 'react-router-dom'
import brain from '../images/human-brain.png'

export default function Header() {
    return (
        <div className='landing-page'>
            <img id='brain-img' src={brain} alt='brain' />
            <h1>My-Brain Tracker</h1>
            <h2>An easy-to-use migraine tracking interface</h2>

            <section className='about-app'>
                <h4>Record data about your migraine</h4>
                <h4>Find common occurrences</h4>
                <h4>Learn more about your migraines</h4>
                <h4>Keep your findings private or share with your medical professional</h4>
            </section>

            <section className='log-in'>
                <button id='link'>
                    <Link to='/login' className='link'>
                        Log in
                    </Link>
                </button>
                <button id='link'>
                    <Link to='/signup' className='link'>
                        Sign up
                    </Link>
                </button>
                <p>*Click log in to see a demo</p>
            </section>
        </div>
    )
}