// // 自定义全局方法
let request = require('../_request');
module.exports = function (list) {
  return new Promise((resolve, reject) => {
    let i = 0, len = 5, books = [];
    down();
    function down() {
      let time = setTimeout(() => {
        if (i === len) {
          clearTimeout(time);
          resolve(books)
        } else if (list[i].title) {
          console.log(i);
          request(list[i].title_url).then($ => {
            books.push({
              'title': list[i].title,
              'content': $('#txtContent').html()
            })
          }).catch(err => {
            reject(err)
          });
          i++;
          down();
        }
      }, 1000)
    }


    // for (let i = 0; i < list.length; i++) {
    //   console.log(list[i].title_url)
    // }
    // console.log(8)
    // resolve('ok');
    // request(url).then($ => {
    //   let chapters_list = $('#chapters-list li');
    //   if (chapters_list && chapters_list.length > 0) {
    //     let _length = chapters_list.length > 20 ? 20 : chapters_list.length;
    //     let novelList = [];
    //     for (let i = 0; i < _length; i++) {
    //       novelList.push({
    //         'title': chapters_list.eq(i).children('a').html(),
    //         'title_url': 'https://www.boquge.com' + chapters_list.children('a').attr('href')
    //       })
    //     }
    //     resolve(novelList)
    //   } else {
    //     reject('获取失败');
    //   }
    // })
  })
}