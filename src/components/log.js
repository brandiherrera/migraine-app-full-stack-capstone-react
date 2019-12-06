import React from 'react';
import './log.css'

export default class Log extends React.Component {
    // static defaultProps = {
    //     records: []
    // };

    render() {
        // console.log(this.props)
        return(

        <div className='log'>
            <h3>Log</h3>
            {this.props.records.map(record => (
                <div key={record.id + 1} className='log-item'>
                    <p>Date: {record.date_published}</p>
                    <p>Triggers: {record.trigger}</p>
                    <p>Symptoms: {record.symptom}</p>
                    <p>Treatments: {record.treatment}</p>
                    <p>Comments: {record.comment}</p>
                </div>
            ))}
        </div>
        )}
            }