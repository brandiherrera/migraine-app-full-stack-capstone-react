import React from 'react'
import './stats.css'

export default function Stats() {
    return (
        <div className='stats'>
            <h3>My Stats</h3>
            <div className='stats-container'>
                <section className='data-box' id='trigger-data'>
                    <div>Most common trigger:</div>
                </section>
                <section className='data-box' id='symptom-data'>
                    <div>Most common symptom:</div>
                </section>
                <section className='data-box' id='treatment-data'>
                    <div>Most used treatment:</div>
                </section>
            </div>
        </div>
    )
}