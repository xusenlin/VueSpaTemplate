export default {

  setLoginUser: function (data) {
    sessionStorage.setItem('user', JSON.stringify(data))
  },
  getLoginUser: function () {
    return JSON.parse(sessionStorage.getItem('user'))
  },

}
