import React from 'react';
import RecordApiService from '../services/record-api-service'

export default class RecordMigraine extends React.Component {
    static defaultProps = {
        onAddRecord: () => { },
        onSetError: () => { },
    };

    handleSubmit = e => {
        e.preventDefault()

        const { /*date,*/ comments } = e.target

        const locationSelected = document.querySelectorAll('#location option:checked');
        const locationValues = Array.from(locationSelected).map(opt => opt.value).toString();
        // console.log(locationValues);
        const timeSelected = document.querySelectorAll('#time option:checked');
        const timeValues = Array.from(timeSelected).map(opt => opt.value).toString();
        // console.log(timeValues);
        const onsetSelected = document.querySelectorAll('#onset option:checked');
        const onsetValues = Array.from(onsetSelected).map(opt => opt.value).toString();
        // console.log(onsetValues);
        const intensitySelected = document.querySelectorAll('#intensity option:checked');
        const intensityValues = Array.from(intensitySelected).map(opt => opt.value).toString();
        // console.log(intensityValues);
        const triggersSelected = document.querySelectorAll('#triggers option:checked');
        const triggerValues = Array.from(triggersSelected).map(opt => opt.value).toString();
        // console.log(triggerValues)
        // const triggers2Selected = document.querySelectorAll('triggers2 option:checked');
        // const triggers2Values = Array.from(triggers2Selected).map(opt => opt.checked);
        // console.log(triggers2Values)
        const symptomsSelected = document.querySelectorAll('#symptoms option:checked');
        const symptomValues = Array.from(symptomsSelected).map(opt => opt.value).toString();
        // console.log(symptomValues)
        const treatmentsSelected = document.querySelectorAll('#treatments option:checked');
        const treatmentValues = Array.from(treatmentsSelected).map(opt => opt.value).toString();
        // console.log(treatmentValues)
        const record = {
            // id: '',
            location: locationValues,
            time: timeValues,
            onset: onsetValues,
            intensity: intensityValues,
            // date_published: date.value,
            trigger: triggerValues,
            symptom: symptomValues,
            treatment: treatmentValues,
            comment: comments.value,
        }
        console.log(record)
        RecordApiService.postUserRecord(record.id, record.location, record.time, record.onset, /*date.value, */record.intensity, triggerValues, symptomValues, treatmentValues, comments.value)
            .then(() => {
                comments.value = ''
                window.location = '/tracker'
                console.log('postUserRecord working')
            })
            .catch(this.props.onSetError)
    }

    render() {

        return (
            <form
                className='record-migraine-form'
                id='record-migraine-form'
                onSubmit={this.handleSubmit}>

                <legend><h2>Record your migraine</h2></legend>
                {/* <h3>And start tracking your data</h3> */}

                <div className="record-form-entry">
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' id='date' placeholder='10/20/2019' />
                </div>

                <div className="record-form-entry">
                    <label htmlFor="location">Select your location when your attack began</label>
                    <select name='location' id='location'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Home</option>
                            <option>Indoors, not at home</option>
                            <option>Work</option>
                            <option>Traveling</option>
                            <option>Car/Bus/Metro</option>
                            <option>Outdoors</option>
                            <option>Bed (asleep)</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="time">Select the time of day when your attack began</label>
                    <select name='time' id='time'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Morning</option>
                            <option>Noon</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                            <option>Late-evening</option>
                            <option>Overnight - I was asleep</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="onset">Select the most noticeable onset symptom prior to your attack</label>
                    <select name='onset' id='onset'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Prodrome</option>
                            <option>Aura</option>
                            <option>Yawning</option>
                            <option>Muscle pain</option>
                            <option>Headache</option>
                            <option>Fatigue</option>
                            <option>Tingling in neck, face, or head</option>
                            <option>Hunger</option>
                            <option>Anxiety</option>
                            <option>Depressed mood</option>
                            <option>Increased energy</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="intensity">Rate your pain intensity level</label>
                    <select name='intensity' id='intensity' required>
                        <optgroup role='group' required>
                            {/* <option value="">Select</option> */}
                            <option>1 - Lowest</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10 - Highest</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="triggers">Select your most noticeable trigger</label>
                    <select name='triggers' id='triggers' >
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option value="Lack of sleep">Lack of sleep</option>
                            <option>Dehydration</option>
                            <option>Stress</option>
                            <option>Anxiety</option>
                            <option>Caffeine</option>
                            <option>Storm/Humidity</option>
                            <option>Bright light</option>
                            <option>Processed food</option>
                            <option>Strong odor</option>
                            <option>Skipped beta blockers</option>
                            <option>Sinus</option>
                            <option>Alcohol</option>
                            <option>Sodium</option>
                            <option>Irregular sleep</option>
                        </optgroup>
                    </select>

                    <div className="record-form-entry">
                        <label htmlFor="triggers2">Select any other triggers experienced</label><br />
                        <input type='radio' name='Lack of sleep' value='Lack of sleep' />Lack of Sleep<br />
                        <input type='radio' name='Dehydration' value='Dehydration' />Dehydration<br />
                        <input type='radio' name='Stress' value='Stress' />Stress<br />
                    </div>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="symptoms">Select the most severe symptom during your attack</label>
                    <select name='symptoms' id='symptoms'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Pounding, pulsating, or throbbing pain</option>
                            <option>Nausea</option>
                            <option>Vomiting</option>
                            <option>Insomnia</option>
                            <option>Depressed mood</option>
                            <option>Anxiety</option>
                            <option>Light sensitivity</option>
                            <option>Noise sensitivity</option>
                            <option>Smell sensitivity</option>
                            <option>Fatigue</option>
                            <option>Increased pain when moving</option>
                            <option>Blurred vision</option>
                            <option>Difficulty concentrating</option>
                            <option>Pressure in head</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="treatments">Select the treatment that has helped you the most</label>
                    <select name='treatments' id='treatments'>
                        <optgroup role='group'>
                            {/* <option value="">Select</option> */}
                            <option>Medicine</option>
                            <option>Sleep</option>
                            <option>Rest</option>
                            <option>Caffeine</option>
                            <option>Dark room</option>
                            <option>Ice packs</option>
                            <option>Heating pad</option>
                            <option>Drinking water</option>
                            <option>Cold shower</option>
                            <option>Hot shower</option>
                            <option>Food</option>
                            <option>Music</option>
                        </optgroup>
                    </select>
                </div>

                <div className="record-form-entry">
                    <label htmlFor="comments">Additional Comments</label>
                    <input type="text" name='comments' id='comments' />
                </div>

                <button
                    type='submit'
                >
                    Record Entry
                </button>
            </form >
        )
    }
}