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
        const triggersSelected = document.querySelectorAll('#triggers option:checked');
        const triggerValues = Array.from(triggersSelected).map(opt => opt.value);
        // console.log(triggerValues)
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
        RecordApiService.postRecord(record.id, date.value, triggerValues, symptomValues, treatmentValues, comments.value)
            .then(this.props.onAddRecord(record))
            .then(() => {
                comments.value = ''
                window.location = '/tracker'
            })
            // console.log(this.props.onSetError)
            .catch(this.props.onSetError)
        

        // this.props.onAddRecord(record)


        // this.props.onAddRecord(record)

        // const record = {
        // date: date.value,
        // triggers: triggers.value,
        // symptoms: symptoms.value,
        // treatments: treatments.value,
        // comments: comments.value,
        // }
        // this.setState({ error: null })
        // fetch(config.API_ENDPOINT, {
        //     method: 'POST',
        //     body: JSON.stringify(record),
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // })
        // .then(res => {
        //     if (!res.ok) {
        //         return res.json().then(error => {
        //             throw error
        //         })
        //     }
        //     return res.json()
        // })
        // .then(data => {
        //     date.value = ''
        //     triggers.value = ''
        //     symptoms.value = ''
        //     treatments.value = ''
        //     comments.value = ''
        //     this.props.history.push('/')
        //     this.props.onAddRecord(data)
        // })
        // .catch(error => {
        //     this.setState({ error })
        // })
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
                    <label htmlFor="triggers">Triggers</label>
                    <select name='triggers' id='triggers'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option value="Lack of sleep">Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Alcohol</option>
                        </optgroup>
                    </select>
                    {/* <button onClick={addTrigger()}> +</button> */}
                    <select name='triggers' id='triggers'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Alcohol</option>
                        </optgroup>
                    </select>
                    <select name='triggers' id='triggers'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Alcohol</option>
                        </optgroup>
                    </select>
                    {/* <input type="text" name='triggers' id='triggers' placeholder='Last Name' /> */}
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