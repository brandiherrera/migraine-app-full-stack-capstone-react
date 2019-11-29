import React from 'react';

export default function RecordMigraine(props) {
    // console.log(props)
    return (
        <form className='record-migraine-form'>
            <div className="record-form-entry">
                <label htmlFor="date">Date</label>
                <input placeholder='Date' type="text" name='date' id='date' />
            </div>

            <div className="record-form-entry">
                <label htmlFor="triggers">Triggers</label>
                <input type="text" name='triggers' id='triggers' placeholder='Last Name' />
            </div>

            <div className="record-form-entry">
                <label htmlFor="symptoms">Symptoms</label>
                <input type="text" name='symptoms' id='symptoms' />
            </div>

            <div className="record-form-entry">
                <label htmlFor="treatments">Treatments</label>
                <input type="text" name='treatments' id='treatments' />
            </div>

            <div className="record-form-entry">
                <label htmlFor="comments">Additional Comments</label>
                <input type="text" name='comments' id='comments' />
            </div>

            <button type='submit'><a href="dashboard.html">Record Entry</a></button>
        </form>
    )
}