import React from 'react'

const RecordContext = React.createContext({
    user: [],
    records: [],
    addRecord: () => { },
    deleteRecord: () => { },
    addUser: () => { },
})

export default RecordContext