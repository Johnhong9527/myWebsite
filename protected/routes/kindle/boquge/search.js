// 自定义全局方法
let request = require('../util/_request');
module.exports = function(name) {
  return new Promise((resolve, reject) => {
    let url = 'https://www.boquge.com/search.htm?keyword=' + encodeURI(name);
    let novelList = [];
    request(url).then($ => {
      let clearfix = $('.clearfix');
      let _length = clearfix.length > 20 ? 20 : clearfix.length;
      for (let i = 1; i < _length; i++) {
        novelList.push({
          // 编号
          index: clearfix
            .eq(i)
            .children('.col-xs-3')
            .children('a')
            .attr('href')
            .split('/')[2],
          // 类型: types
          types: clearfix
            .eq(i)
            .children('.col-xs-1')
            .children('.tag-blue')
            .html(),
          // 小说名称:novel
          novel_list:
            'https://www.boquge.com/book/' +
            clearfix
              .eq(i)
              .children('.col-xs-3')
              .children('a')
              .attr('href')
              .split('/')[2],
          novel: clearfix
            .eq(i)
            .children('.col-xs-3')
            .children('a')
            .html(),
          novel_url:
            'https://www.boquge.com' +
            clearfix
              .eq(i)
              .children('.col-xs-3')
              .children('a')
              .attr('href'),
          // 最新章节:chapter
          chapter: clearfix
            .eq(i)
            .children('.col-xs-4')
            .children('a')
            .html(),
          chapter_url:
            'https://www.boquge.com' +
            clearfix
              .eq(i)
              .children('.col-xs-4')
              .children('a')
              .attr('href'),
          // 作者:author
          author: clearfix
            .eq(i)
            .children('.col-xs-2')
            .eq(0)
            .html(),
          // 更新时间:update_time
          update_time: clearfix
            .eq(i)
            .children('.col-xs-2')
            .eq(1)
            .children('.time')
            .html(),
        });
      }
      resolve(novelList);
    });
  });
};
