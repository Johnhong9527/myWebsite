const ajax = require('../_cros');
// 切割节点模块
const cheerio = require('cheerio');
module.exports = function (url) {
  return new Promise((resolve, reject) => {
    ajax(url)
      .then(res => {
        let resultList = $('div.result-game-item-detail');
        resolve('ok');
      })
      .catch(err => {
        reject(err);
      });
  });
};
