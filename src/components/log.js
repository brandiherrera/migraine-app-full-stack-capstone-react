import React from 'react';
import LogItem from './log-item'
import './log.css'

export default class Log extends React.Component {
    // static defaultProps = {
    //     records: []
    // };

    render() {
        // return(
        // // The below commented code worked perfectly without node server
        // <div className='log'>
        //     <h3>Log</h3>
        //     {this.props.records.map(record => (
        //         <div key={record.id + 1} className='log-item'>
        //             <p>Date: {record.date}</p>
        //             <p>Triggers: {record.triggers}</p>
        //             <p>Symptoms: {record.symptoms}</p>
        //             <p>Treatments: {record.treatments}</p>
        //             <p>Comments: {record.comments}</p>
        //         </div>
        //     ))}
        // </div>
        // )}
        //     }
            
        const { records } = this.props
        console.log(this.props)
        console.log(records.records)
        console.log(this.props.records.records)
        const rec = this.props.records
        console.log(rec)
        return (
            <div className='log'>
                <h3>Log</h3>

                {rec.map(r =>
                    
                    <LogItem
                        key={r.id}
                        {...r}
                        />
                    )}

            </div>

        )
    }
}