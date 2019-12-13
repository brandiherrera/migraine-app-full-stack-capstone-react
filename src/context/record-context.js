import React from 'react'

const RecordContext = React.createContext({
    records: [],
    date: '',
    location: '',
    time: '',
    onset: '',
    intensity: '',
    trigger: '',
    symptom: '',
    treatment: '',
    comment: '',
    addRecord: () => { },
    deleteRecord: () => { },
    addUser: () => { },
})

export default RecordContext