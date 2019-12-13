import React from 'react';
import RecordApiService from '../services/record-api-service'
// import { Link } from 'react-router-dom';
// import config from '../config';

// export default function RecordMigraine(props) {
// const records=[];
export default class RecordMigraine extends React.Component {
    static defaultProps = {
        onAddRecord: () => { },
        onSetError: () => { },
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     //   login,
    //       records,
    //       error: null,
    //     }
    //   }

    // addRecord = record => {
    //     this.setState({
    //       records: [...this.state.records, record],
    //     });
    //     console.log(...this.state.records)
    //   }

    //   setError = error => {
    //     console.error(error)
    //     this.setState({ error: true })
    //   }

    //   componentDidMount() {
    //     console.log('did')
    //     RecordApiService.getRecords()
    //       .then(resJson =>
    //         this.setState({
    //           records: resJson
    //         }))

    //       .catch(error => this.setState({ error }))
    //   }

    handleSubmit = e => {
        e.preventDefault()

        const { date, comments } = e.target
        // console.log(date)
        // const triggers2Selected = document.querySelectorAll('triggers2 option:checked');
        // const triggers2Values = Array.from(triggers2Selected).map(opt => opt.checked);
        // console.log(triggers2Values)
        const triggersSelected = document.querySelectorAll('#triggers option:checked');
        const triggerValues = Array.from(triggersSelected).map(opt => opt.value).toString();
        console.log(triggerValues)
        const symptomsSelected = document.querySelectorAll('#symptoms option:checked');
        const symptomValues = Array.from(symptomsSelected).map(opt => opt.value);
        // console.log(symptomValues)
        const treatmentsSelected = document.querySelectorAll('#treatments option:checked');
        const treatmentValues = Array.from(treatmentsSelected).map(opt => opt.value);
        // console.log(treatmentValues)
        const record = {
            // id: '',
            date_published: date.value,
            trigger: triggerValues,
            symptom: symptomValues,
            treatment: treatmentValues,
            comment: comments.value,
        }
        // console.log(record)
        // RecordApiService.postRecord(record.id, date.value, triggerValues, symptomValues, treatmentValues, comments.value)
        RecordApiService.postUserRecord(record.id, date.value, triggerValues, symptomValues, treatmentValues, comments.value)
            // .then(this.props.onAddRecord(record))
            .then(() => {
                comments.value = ''
                window.location = '/tracker'
            })
            .catch(this.props.onSetError)
    }

    render() {

        return (
            <form
                className='record-migraine-form'
                onSubmit={this.handleSubmit}>
                <div className="record-form-entry">
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' id='date' placeholder='10/20/2019' />
                </div>

                <div className="record-form-entry">
                    <label htmlFor="triggers">Select your most noticeable trigger</label>
                    <select name='triggers' id='triggers' >
                        <optgroup role='group'>
                            <option value="" >Select one</option>
                            <option value="Lack of sleep">Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Stress</option>
                        </optgroup>
                    </select>

                    <div className="record-form-entry">
                        <label htmlFor="triggers2">Select any other triggers experienced</label><br />
                        <input type='radio' name='Lack of sleep' value='Lack of sleep' />Lack of Sleep<br />
                        <input type='radio' name='Dehydration' value='Dehydration' />Dehydration<br />
                        <input type='radio' name='Stress' value='Stress' />Stress<br />
                    </div>

                    {/* <input type='text' name='trigger_comment' id='trigger_comment'></input> */}
                    {/* <select name='triggers' id='triggers-2'>
                        <optgroup role='group'>
                            <option value="">Select</option>
                            <option>Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Alcohol</option>
                        </optgroup>
                    </select>
                    <select name='triggers' id='triggers'>
                        <optgroup role='group'>
                            <option value="">Select</option>
                            <option>Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Alcohol</option>
                        </optgroup>
                    </select>
                    <input type="text" name='triggers' id='triggers' placeholder='Last Name' /> */}
                </div>

                <div className="record-form-entry">
                    <label htmlFor="symptoms">Symptoms</label>
                    <select name='symptoms' id='symptoms'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Prodrome</option>
                            <option>Aura</option>
                            <option>Throbbing</option>
                        </optgroup>
                    </select>
                    <select name='symptoms' id='symptoms'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Prodrome</option>
                            <option>Aura</option>
                            <option>Throbbing</option>
                        </optgroup>
                    </select>
                    <select name='symptoms' id='symptoms'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Prodrome</option>
                            <option>Aura</option>
                            <option>Throbbing</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="treatments">Treatments</label>
                    <select name='treatments' id='treatments'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Medicine</option>
                            <option>Sleep</option>
                            <option>Caffeine</option>
                        </optgroup>
                    </select>
                    <select name='treatments' id='treatments'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Medicine</option>
                            <option>Sleep</option>
                            <option>Caffeine</option>
                        </optgroup>
                    </select>
                    <select name='treatments' id='treatments'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Medicine</option>
                            <option>Sleep</option>
                            <option>Caffeine</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="comments">Additional Comments</label>
                    <input type="text" name='comments' id='comments' />
                </div>

                <button
                    type='submit'
                // onSubmit={e => this.handleRecordMigraine(e)}
                >
                    {/* <Link to='/dashboard'> */}
                    Record Entry
                {/* </Link> */}
                </button>
            </form >
        )
    }
}