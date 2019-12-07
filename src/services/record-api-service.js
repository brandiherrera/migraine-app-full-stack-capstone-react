import TokenService from '../services/token-service'
import config from '../config'

const RecordApiService = {
    getRecords() {
        return fetch(`${config.API_ENDPOINT}/records`, {
          headers: {
            'authorization': `basic ${TokenService.getAuthToken()}`,
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
            'authorization': `basic ${TokenService.getAuthToken()}`,
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
            'authorization': `basic ${TokenService.getAuthToken()}`,
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
      }

}

export default RecordApiService