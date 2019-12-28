import React from 'react'
import RecordContext from '../context/record-context'
import RecordApiService from '../services/record-api-service'
import './tracker.css'

export default class Tracker extends React.Component {
    static contextType = RecordContext;

    handleDelete = e => {
        e.preventDefault()
        const { id } = e.target
        const recordId = Number(id)
        RecordApiService.deleteUserRecord(recordId, this.context.deleteRecord(recordId))
    }

    handleUpdate = e => {
        e.preventDefault()
        const { id } = e.target
        const recordId = Number(id)
        console.log(recordId)
    }

    render() {
        console.log(this.context.records);
        return (
            <div className='tracker' id='tracker'>
                <h2>Tracker</h2>
                <div className='record-container'>
                {this.context.records.map(record => (
                    <ul key={record.id} className='record-item'>
                        <p><strong>Location of attack:</strong>  {record.location}</p>
                        <p><strong>Time of day:</strong>  {record.time}</p>
                        <p><strong>Main onset symptom:</strong>  {record.onset}</p>
                        <p><strong>Intensity:</strong>  {record.intensity}</p>
                        <p><strong>Main trigger:</strong>  {record.trigger}</p>
                        <p><strong>Main symptom:</strong>  {record.symptom}</p>
                        <p><strong>Most helpful treatment:</strong>  {record.treatment}</p>
                        <p><strong>Additional Comments:</strong>  {record.comment}</p>
                        <button
                            id={record.id}
                            type='submit'
                            onClick={this.handleDelete}>
                                Delete Record
                        </button>
                    </ul>
                ))}
            </div>
            </div>
        )
    }
}