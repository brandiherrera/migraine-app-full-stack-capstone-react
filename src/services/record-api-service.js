import TokenService from '../services/token-service'
import config from '../config'

const RecordApiService = {
    getRecords() {
        return fetch(`${config.API_ENDPOINT}/records`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      getRecord(recordId) {
        return fetch(`${config.API_ENDPOINT}/records/${recordId}`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      postRecord(recordId, date, trigger, symptom, treatment, comment) {
        return fetch(`${config.API_ENDPOINT}/records`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            record_id: recordId,
            date,
            trigger,
            symptom,
            treatment,
            comment
          }),
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      deleteRecord(recordId, cb) {
        fetch(config.API_ENDPOINT + `/records/${recordId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${config.API_KEY}`
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error))
            }
            return res.json()
          })
          .then(data => {
            cb(recordId)
          })
          .catch(error => {
            console.error(error)
          })
      }

}

export default RecordApiService