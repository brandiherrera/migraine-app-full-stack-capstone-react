import React from 'react'
import RecordApiService from '../services/record-api-service'
import brain from '../images/human-brain.png'

export default class RecordMigraine extends React.Component {
    static defaultProps = {
        onAddRecord: () => { },
        onSetError: () => { },
    };

    handleSubmit = e => {
        e.preventDefault()
        const { comments } = e.target

        const locationSelected = document.querySelectorAll('#location option:checked');
        const locationValues = Array.from(locationSelected).map(opt => opt.value).toString();

        const timeSelected = document.querySelectorAll('#time option:checked');
        const timeValues = Array.from(timeSelected).map(opt => opt.value).toString();

        const onsetSelected = document.querySelectorAll('#onset option:checked');
        const onsetValues = Array.from(onsetSelected).map(opt => opt.value).toString();

        const intensitySelected = document.querySelectorAll('#intensity option:checked');
        const intensityValues = Array.from(intensitySelected).map(opt => opt.value).toString();

        const triggersSelected = document.querySelectorAll('#triggers option:checked');
        const triggerValues = Array.from(triggersSelected).map(opt => opt.value).toString();

        const symptomsSelected = document.querySelectorAll('#symptoms option:checked');
        const symptomValues = Array.from(symptomsSelected).map(opt => opt.value).toString();

        const treatmentsSelected = document.querySelectorAll('#treatments option:checked');
        const treatmentValues = Array.from(treatmentsSelected).map(opt => opt.value).toString();

        const record = {
            location: locationValues,
            time: timeValues,
            onset: onsetValues,
            intensity: intensityValues,
            trigger: triggerValues,
            symptom: symptomValues,
            treatment: treatmentValues,
            comment: comments.value,
        }
        RecordApiService.postUserRecord(record.id, record.location, record.time, record.onset, record.intensity, triggerValues, symptomValues, treatmentValues, comments.value)
            .then(() => {
                comments.value = ''
                window.location = '/tracker'
            })
            .catch(this.props.onSetError)
    }

    render() {

        return (
            <div className='record-form' id='record-form'>
                <img id='brain-img-form' src={brain} alt='brain' />

                <form
                    className='record-migraine-form'
                    id='record-migraine-form'
                    onSubmit={this.handleSubmit}>
                    <h2>Record your migraine</h2>
                    <fieldset>

                        <div className='record-form-entry'>
                            <label htmlFor='location'>Select your location when your attack began</label>
                            <select name='location' id='location'>
                                <optgroup role='group'>
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

                        <div className='record-form-entry'>
                            <label htmlFor='time'>Select the time of day when your attack began</label>
                            <select name='time' id='time'>
                                <optgroup role='group'>
                                    <option>Morning</option>
                                    <option>Noon</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                    <option>Late-evening</option>
                                    <option>Overnight - I was asleep</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className='record-form-entry'>
                            <label htmlFor='onset'>Select the most noticeable onset symptom prior to your attack</label>
                            <select name='onset' id='onset'>
                                <optgroup role='group'>
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

                        <div className='record-form-entry'>
                            <label htmlFor='intensity'>Rate your pain intensity level</label>
                            <select name='intensity' id='intensity' required>
                                <optgroup role='group' required>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className='record-form-entry'>
                            <label htmlFor='triggers'>Select your most noticeable trigger</label>
                            <select name='triggers' id='triggers' >
                                <optgroup role='group'>
                                    <option value='Lack of sleep'>Lack of sleep</option>
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
                        </div>

                        <div className='record-form-entry'>
                            <label htmlFor='symptoms'>Select the most severe symptom during your attack</label>
                            <select name='symptoms' id='symptoms'>
                                <optgroup role='group'>
                                    <option>Pounding</option>
                                    <option>Pulsating</option>
                                    <option>Throbbing</option>
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

                        <div className='record-form-entry'>
                            <label htmlFor='treatments'>Select the treatment that has helped you the most</label>
                            <select name='treatments' id='treatments'>
                                <optgroup role='group'>
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

                        <div className='record-form-entry'>
                            <label htmlFor='comments'>Additional Comments</label>
                            <input type='text' name='comments' id='comments' />
                        </div>

                        <button
                            type='submit'
                        >
                            Record Entry
                </button>
                    </fieldset>
                </form >
            </div>
        )
    }
}