import React from 'react'
import './stats.css'

export default function Stats() {
    return (
        <div className='stats'>
            <h3>My Stats</h3>
            <div className='stats-container'>
                <section className='data-box' id='trigger-data'>
                    <h5>
                        [TRIGGER-HERE] triggers your migraines [XX]% of the time.
                    </h5>
                </section>
                <section className='data-box' id='symptom-data'>
                    <h5>[SYMPTOM-HERE] occur [XX]% of the time.</h5>
                        {/* <h5>Your top 3 symptoms:</h5>
                        <h6>Aura - 50%</h6>
                        <h6>Aura - 50%</h6>
                        <h6>Aura - 50%</h6> */}
                </section>
                <section className='data-box' id='treatment-data'>
                    <h5>[TREATMENT-HERE] helps you [XX]% of the time.</h5>
                </section>
            </div>
        </div>
    )
}