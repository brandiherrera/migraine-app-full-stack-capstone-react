import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

// export default function RecordMigraine(props) {
export default class RecordMigraine extends React.Component {
    static defaultProps = {
        onAddRecord: () => {}
    };

    state = {
        error: null,
    };
    // componentDidMount() {
    //     this.setState({

    //     })
    // }

    // console.log(this.state.records)

    handleSubmit = e => {
        e.preventDefault()
        const sel = document.getElementById('triggers')
        const triggers = sel.options[sel.selectedIndex];
        console.log(triggers.text)

        // const { triggers } = e.target
        // console.log(triggers.value)

        this.props.onAddRecord(triggers.text)
        // const record = {
        //     date: date.value,
        //     triggers: triggers.value,
        //     symptoms: symptoms.value,
        //     treatments: treatments.value,
        //     comments: comments.value,
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
                <input type="text" name='date' id='date' placeholder='10/20/2019' />
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