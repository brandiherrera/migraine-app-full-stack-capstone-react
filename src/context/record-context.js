import React from 'react'

const RecordContext = React.createContext({
    // data: [],
    records: [],
    trigger: '',
    symptom: '',
    addRecord: () => { },
    deleteRecord: () => { },
    addUser: () => { },
})

export default RecordContext