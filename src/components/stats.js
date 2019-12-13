import React from 'react'
import RecordContext from '../context/record-context'
import './stats.css'

console.log(RecordContext);

export default function Stats(props) {
    console.log(props)
    const stats = props.data
    console.log(stats)
    // console.log(dataInfo.trigger)
    return (
        <RecordContext.Consumer>
            {(value) => {
                console.log(value);
                return (
                    <div className='stats'>
                        <h3>My Stats</h3>
                        <div className='stats-container'>
                            {/* {data.map(data => (
                    <p>{data.trigger}</p>
                ))} */}

                            <section className='data-box' id='trigger-data'>
                                <h5>
                                    {/* {stats.trigger}  */}
                                    {value.trigger} is your largest trigger.
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
                            {/* })} */}
                        </div>
                    </div>
                )
            }}
        </RecordContext.Consumer>
    )
}