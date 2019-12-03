import React from 'react';
import './log.css'

export default function Log(props) {
    // console.log(props)
    return (
        <div className='log'>
            <h3>Log</h3>
            {props.records.map(record => (
                <div key={record.id + 1} className='log-item'>
                    <p>Date: {record.date}</p>
                    <p>Triggers: {record.triggers}</p>
                    <p>Symptoms: {record.symptoms}</p>
                    <p>Treatments: {record.treatments}</p>
                    <p>Comments: {record.comments}</p>
                </div>
            ))}
        {/* {props.records.id} */}
        </div>

    )
}