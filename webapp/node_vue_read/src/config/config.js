module.exports = {
  apiPath() {
    if (process.env.NODE_ENV == 'development') {
      return 'https://api.honghaitao.net/kindle/'
      // return 'http://127.0.0.1:3000/kindle/'
    } else {
      // return 'http://127.0.0.1:3000/kindle/'
      return ''
    }
  }
};
