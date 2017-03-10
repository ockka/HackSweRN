import 'whatwg-fetch'
import apiUtil from './apiUtil'
const API_HEADERS = {
  'Content-Type': 'application/json'
}

const apiCommunicator = {

  getMethod(path) {
      return fetch(path, { headers: API_HEADERS})
      .then((response) => response).then(apiUtil.checkStatus)
  },
  putWithBodyMethod(path, data) {
      return fetch(path, { method: 'PUT', headers: API_HEADERS, body: JSON.stringify(data) })
      .then((response) => response).then(apiUtil.checkStatus)
  },
  postMethod(path, data) {
      return fetch(path, { method: 'POST', headers: API_HEADERS, body: JSON.stringify(data) })
      .then((response) => response).then(apiUtil.checkStatus)
  }
}

export default apiCommunicator