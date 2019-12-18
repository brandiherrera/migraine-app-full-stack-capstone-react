import React from 'react'
import RecordContext from '../context/record-context'
import TokenService from '../services/token-service'
import config from '../config'
import RecordApiService from '../services/record-api-service';

export default class EditRecord extends React.Component {
    static contextType = RecordContext;

    state = {
        // records: [],
        id: '',
        date: '',
        location: '',
        time: '',
        onset: '',
        intensity: '',
        trigger: '',
        symptom: '',
        treatment: '',
        comment: '',
        error: null,
    };

    componentDidMount() {
        const { recordId } = this.props.match.params
        console.log(`${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/records/${recordId}`)
        fetch(`${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/records/${recordId}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
            .then(res => {
                this.setState({
                    // id: res.id,
                    location: res.location,
                    time: res.time,
                    onset: res.onset,
                    intensity: res.intensity,
                    trigger: res.trigger,
                    symptom: res.symptom,
                    treatment: res.treatment,
                    comment: res.comment,
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    handleChangeLocation = e => {
        this.setState({ location: e.target.value })
    };

    handleChangeTime = e => {
        this.setState({ time: e.target.value })
    };

    handleChangeOnset = e => {
        this.setState({ onset: e.target.value })
    };
    handleChangeIntensity = e => {
        this.setState({ intensity: e.target.value })
    };

    handleChangeTrigger = e => {
        this.setState({ trigger: e.target.value })
    };

    handleChangeSymptom = e => {
        this.setState({ symptom: e.target.value })
    };

    handleChangeTreatement = e => {
        this.setState({ treatment: e.target.value })
    };

    handleChangeComment = e => {
        this.setState({ comment: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault()
        const recordId = this.props.match.params
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
        const updatedRecord = {
            location: locationValues,
            time: timeValues,
            onset: onsetValues,
            intensity: intensityValues,
            trigger: triggerValues,
            symptom: symptomValues,
            treatment: treatmentValues,
            comment: comments.value,
        }
console.log(updatedRecord)
console.log(this.props.match.params.recordId)
        // const { recordNum } = this.props.match.params.recordId
        // const recordId - re
        RecordApiService.updateUserRecord(updatedRecord.id, updatedRecord.location, updatedRecord.time, updatedRecord.onset, updatedRecord.intensity, triggerValues, symptomValues, treatmentValues, comments.value )
            .then(() => {
                this.resetFields(updatedRecord)
                this.context.updateRecord(updatedRecord)
                this.props.history.push('/')
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    resetFields = (newFields) => {
        this.setState({
          location: newFields.location || '',
          time: newFields.time || '',
          onset: newFields.onset || '',
          intensity: newFields.intensity || '',
          trigger: newFields.trigger || '',
          symptom: newFields.symptom || '',
          treatment: newFields.treatment || '',
          comment: newFields.comment || '',
        })
      }
    
      handleClickCancel = () => {
        this.props.history.push('/')
      };


    render() {

        // const { location, time, onset, intensity, trigger, symptom, treatment, comment } = this.state
        console.log(this.context.records)
        console.log(this.context.records.map(r => r.id === 2
            ))

        return (
            <form
                className='edit-record-form'
                id='edit-record-form'
                onSubmit={this.handleSubmit}>

                <legend><h2>Edit your record</h2></legend>

                {/* <div className="edit-form-entry">
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' id='date' placeholder='10/20/2019' />
                </div> */}

                <div className="edit-form-entry">
                    <label htmlFor="location">Select your location when your attack began</label>
                    <select name='location' id='location'>
                        <optgroup role='group'>
                            <option value={this.context.location}>{this.context.location}</option>
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

                <div className="edit-form-entry">
                    <label htmlFor="time">Select the time of day when your attack began</label>
                    <select name='time' id='time' defaultValue={this.context.time}>
                        <optgroup role='group'>
                            <option value={this.context.time}>{this.context.time}</option>
                            <option>Morning</option>
                            <option>Noon</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                            <option>Late-evening</option>
                            <option>Overnight - I was asleep</option>
                        </optgroup>
                    </select>
                </div>

                <div className="edit-form-entry">
                    <label htmlFor="onset">Select the most noticeable onset symptom prior to your attack</label>
                    <select name='onset' id='onset' defaultValue={this.context.onset}>
                        <optgroup role='group'>
                            <option value={this.context.onset}>{this.context.onset}</option>
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

                <div className="edit-form-entry">
                    <label htmlFor="intensity">Rate your pain intensity level</label>
                    <select name='intensity' id='intensity' onChange={this.handleChangeIntensity} required>
                        <optgroup role='group' required>
                            <option value={this.context.intensity}>{this.context.intensity}</option>
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

                <div className="edit-form-entry">
                    <label htmlFor="triggers">Select your most noticeable trigger</label>
                    <select name='triggers' id='triggers' >
                        <optgroup role='group'>
                            <option value={this.context.trigger}>{this.context.trigger}</option>
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

                    {/* <div className="edit-form-entry">
                        <label htmlFor="triggers2">Select any other triggers experienced</label><br />
                        <input type='radio' name='Lack of sleep' value='Lack of sleep' />Lack of Sleep<br />
                        <input type='radio' name='Dehydration' value='Dehydration' />Dehydration<br />
                        <input type='radio' name='Stress' value='Stress' />Stress<br />
                    </div> */}
                </div>

                <div className="edit-form-entry">
                    <label htmlFor="symptoms">Select the most severe symptom during your attack</label>
                    <select name='symptoms' id='symptoms'>
                        <optgroup role='group'>
                            <option value={this.context.symptom}>{this.context.symptom}</option>
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

                <div className="edit-form-entry">
                    <label htmlFor="treatments">Select the treatment that has helped you the most</label>
                    <select name='treatments' id='treatments'>
                        <optgroup role='group'>
                            <option value={this.context.treatment}>{this.context.treatment}</option>
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

                <div className="edit-form-entry">
                    <label htmlFor="comments">Additional Comments</label>
                    <input type="text" name='comments' id='comments' 
                    // defaultValue={this.context.comment} 
                    placeholder={this.context.comment}/>{this.context.comment}
                </div>

                <button
                    type='submit'
                >
                    Submit
                </button>
            </form >
        )
    }
}