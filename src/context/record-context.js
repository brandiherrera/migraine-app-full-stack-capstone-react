import React from 'react'

const RecordContext = React.createContext({
  records: [],
  addRecord: () => {},
  deleteRecord: () => {},
})

export default RecordContext