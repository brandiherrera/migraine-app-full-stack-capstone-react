import React from 'react';
import RecordContext from '../context/record-context'
import './tracker.css'
import RecordApiService from '../services/record-api-service';

export default class Tracker extends React.Component {
    static contextType = RecordContext;

    handleDelete = e => {
        e.preventDefault()
        const { id } = e.target
        const recordId = Number(id)
        console.log(recordId)
        RecordApiService.deleteUserRecord(recordId, this.context.deleteRecord(recordId))
    }

    render() {
        console.log(this.context);
        return (
            <div className='tracker'>
                <h3>Tracker</h3>
                {this.context.records.map(record => (
                    <div key={record.id} className='record-item'>
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
                            id={record.id}
                            type='submit'
                            onClick={this.handleDelete}>
                            Delete Record
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}