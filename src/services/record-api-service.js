import TokenService from '../services/token-service'
import config from '../config'

const RecordApiService = {
  getRecords() {
    console.log('getRecords running')
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
  getUserRecords() {
    console.log('getUserRecords running')
    return fetch(`${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/records`, {
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
    // console.log(user.id)
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
  postUserRecord(recordId, location, time, onset, intensity, trigger, symptom, treatment, comment) {
    // console.log(userId)
    return fetch(`${config.API_ENDPOINT}/users/${TokenService.getUserId('userId')}/records`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        record_id: recordId,
        location,
        time,
        onset,
        intensity,
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
    fetch(`${config.API_ENDPOINT}/records/${recordId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
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
  },
  deleteUserRecord(recordId, cb) {
    fetch(`${config.API_ENDPOINT}/users/${TokenService.getUserId('userId')}/records/${recordId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
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
  },
  getUserStats() {
    console.log('getUserStats running')
    return fetch(`${config.API_ENDPOINT}/users/${TokenService.getUserId('userId')}/stats`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default RecordApiService