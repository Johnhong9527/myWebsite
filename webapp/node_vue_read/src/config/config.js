module.exports = {
  apiPath() {
    if (process.env.NODE_ENV == 'development') {
      return 'https://api.honghaitao.net/'
      // return 'http://127.0.0.1:3000/'
    } else {
      return ''
    }
  }
};
