import React from 'react';
import './tracker.css'

export default class Tracker extends React.Component {
    // static defaultProps = {
    //     records: []
    // };

    render() {
        // console.log(this.props)
        return (

            <div className='tracker'>
                <h3>Tracker</h3>
                {this.props.records.map(record => (
                    <div key={record.id + 1} className='record-item'>
                        <p>Date: {record.date_published}</p>
                        <p>Triggers: {record.trigger}</p>
                        <p>Symptoms: {record.symptom}</p>
                        <p>Treatments: {record.treatment}</p>
                        <p>Comments: {record.comment}</p>
                        <button
                            type='submit'>
                                Update Record
                        </button>
                        <button
                            type='submit'>
                                Delete Record
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}