import React from 'react'
// import { Link } from 'react-router-dom'
import RecordContext from '../context/record-context'
import './tracker.css'
import RecordApiService from '../services/record-api-service';
// import brain from '../images/human-brain.png'

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
            <div className='tracker' id='tracker'>
                {/* <img id="brain-img-tracker" src={brain} alt="brain"/> */}
                <h2>Tracker</h2>
                <div className='record-container'>
                {this.context.records.map(record => (
                    <ul key={record.id} className='record-item'>
                        {/* <p><strong>Date:</strong> {record.date_published}</p> */}
                        <p><strong>Location of attack:</strong>  {record.location}</p>
                        <p><strong>Time of day:</strong>  {record.time}</p>
                        <p><strong>Main onset symptom:</strong>  {record.onset}</p>
                        <p><strong>Intensity:</strong>  {record.intensity}</p>
                        <p><strong>Main trigger:</strong>  {record.trigger}</p>
                        <p><strong>Main symptom:</strong>  {record.symptom}</p>
                        <p><strong>Most helpful treatment:</strong>  {record.treatment}</p>
                        <p><strong>Additional Comments:</strong>  {record.comment}</p>
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
                    </ul>
                ))}
            </div>
            </div>
        )
    }
}