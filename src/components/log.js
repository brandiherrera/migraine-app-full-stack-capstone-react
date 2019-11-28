import React from 'react';
import './log.css'

export default function Log(props) {
    console.log(props.logs)
    // console.log(logs)
    return (
        <div className='log'>
            <h3>Log</h3>
            {props.logs.map(log => (
                <div key={log.id} className='log-item'>
                    Date: {log.date}
                    Triggers: {log.triggers}
                    Symptoms: {log.symptoms}
                    Treatments: {log.treatments}
                    Comments: {log.comments}
                </div>
            ))}
        </div>

    )
}