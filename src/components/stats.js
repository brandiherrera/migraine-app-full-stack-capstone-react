import React from 'react'
import RecordContext from '../context/record-context'
import './stats.css'

export default function Stats() {

    return (
        <RecordContext.Consumer>
            {(value) => {
                return (
                    <div className='stats'>
                        {/* <h3>My Stats</h3> */}
                        <div className='stats-container'>
                            <section className='data-box' id='location-time-data'>
                                Most frequent location:
                                <h2 className='dashboard-stats'>{value.location}</h2>
                            </section>
                            <section className='data-box' id='intensity-data'>
                                Average intensity:
                                    <h2 className='dashboard-stats'>{value.intensity}</h2>
                            </section>
                            <section className='data-box' id='onset-data'>
                                Most frequent sign of an attack:
                                    <h2 className='dashboard-stats'>{value.onset}</h2>
                            </section>

                            <section className='data-box' id='trigger-data'>
                                Your largest trigger:
                                    <h2 className='dashboard-stats'>{value.trigger}</h2>
                            </section>

                            <section className='data-box' id='symptom-data'>
                                Most frequent symptom:
                                <h2 className='dashboard-stats'>{value.symptom}</h2>
                            </section>

                            <section className='data-box' id='treatment-data'>
                                Most helpful relief:
                                <h2 className='dashboard-stats'>{value.treatment}</h2>
                            </section>
                        </div>
                    </div>
                )
            }}
        </RecordContext.Consumer>
    )
}