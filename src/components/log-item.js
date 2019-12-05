import React from 'react'

export default function LogItem(props) {
    console.log(props)
    return (
        <div key={props.id} className='log-item'>
            <p>Date: {props.date}</p>
            <p>Triggers: {props.triggers}</p>
            <p>Symptoms: {props.symptoms}</p>
            <p>Treatments: {props.treatments}</p>
            <p>Comments: {props.comments}</p>
        </div>
    )
}