import React from 'react'
import RecordContext from '../context/record-context'
import './stats.css'

export default function Stats() {

    return (
        <RecordContext.Consumer>
            {(value) => {
                console.log(value);
                return (
                    <div className='stats'>
                        <h3>My Stats</h3>
                        <div className='stats-container'>

                            <section className='data-box' id='location-time-data'>
                                {/* <h5> */}
                                    Your migraines happen more at <h2>{value.location} at {value.time}</h2>
                                {/* </h5> */}
                            </section>

                            <section className='data-box' id='intensity-data'>
                                {/* <h5> */}
                                    <h2>{value.intensity}</h2>
                                    Your average intensity
                                {/* </h5> */}
                            </section>

                            <section className='data-box' id='onset-data'>
                                {/* <h5> */}
                                    <h2>{value.onset}</h2> is your most frequent sign of an upcoming attack.
                                {/* </h5> */}
                            </section>

                            <section className='data-box' id='trigger-data'>
                                {/* <h5> */}
                                    Your largest trigger is <h2>{value.trigger}</h2>
                                {/* </h5> */}
                            </section>

                            <section className='data-box' id='symptom-data'>
                                {/* <h5> */}
                                    <h2>{value.symptom}</h2> is your most occurring symptom.
                                {/* </h5> */}
                            </section>

                            <section className='data-box' id='treatment-data'>
                                {/* <h5> */}
                                    <h2>{value.treatment}</h2> gives you the most relief.
                                {/* </h5> */}
                            </section>
                        </div>
                    </div>
                )
            }}
        </RecordContext.Consumer>
    )
}