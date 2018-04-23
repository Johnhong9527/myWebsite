// 自定义全局方法
let request = require('../_request');
module.exports = function (url) {
  return new Promise((resolve, reject) => {
    request(url).then($ => {
      let chapters_list = $('#chapters-list li');
      if (chapters_list && chapters_list.length > 0) {
        let _length = chapters_list.length > 100 ? 100 : chapters_list.length;
        // let _length = chapters_list.length;
        let novelList = [];
        for (let i = 0; i < _length; i++) {
          if (chapters_list.eq(i).children('a').html()) {
            novelList.push({
              'title': chapters_list.eq(i).children('a').html(),
              'title_url': 'https://www.boquge.com' + chapters_list.eq(i).children('a').attr('href')
            })
          }
        }
        resolve(novelList)
      } else {
        reject('获取失败');
      }
    })
  })
}