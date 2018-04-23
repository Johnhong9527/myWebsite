module.exports = {
  apiPath() {
    if (process.env.NODE_ENV == 'development') {
      return 'https://api.honghaitao.net/'
    } else {
      return ''
    }
  }
};
