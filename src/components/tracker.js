import React from 'react'
import { Link } from 'react-router-dom'
import RecordContext from '../context/record-context'
import './tracker.css'
import RecordApiService from '../services/record-api-service';

export default class Tracker extends React.Component {
    static contextType = RecordContext;

    handleDelete = e => {
        e.preventDefault()
        const { id } = e.target
        const recordId = Number(id)
        // console.log(recordId)
        RecordApiService.deleteUserRecord(recordId, this.context.deleteRecord(recordId))
    }

    handleUpdate = e => {
        e.preventDefault()
        const { id } = e.target
        const recordId = Number(id)
        console.log(recordId)
        // RecordApiService.updateUserRecord(recordId, this.context.updateRecord(recordId))
    }

    render() {
        console.log(this.context.records);
        return (
            <div className='tracker'>
                <h3>Tracker</h3>
                {this.context.records.map(record => (
                    <div key={record.id} className='record-item'>
                        {/* <p>Date: {record.date_published}</p> */}
                        <p>Location of attack: {record.location}</p>
                        <p>Time of day: {record.time}</p>
                        <p>Main onset symptom: {record.onset}</p>
                        <p>Intensity: {record.intensity}</p>
                        <p>Main trigger: {record.trigger}</p>
                        <p>Main symptom: {record.symptom}</p>
                        <p>Most helpful treatment: {record.treatment}</p>
                        <p>Additional Comments: {record.comment}</p>
                        {/* <button
                        id={record.id}
                            type='submit'
                            onClick={this.handleUpdate}
                            >
                                <Link
                                to={`/edit/${record.id}`}>
                            Update Record
                                </Link>
                        </button> */}
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