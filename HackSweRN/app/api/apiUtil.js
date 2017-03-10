const apiUtils = {
  checkStatus: function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response
  }
}
export default apiUtils
