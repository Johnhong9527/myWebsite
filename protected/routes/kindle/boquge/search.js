const ajax = require('../_cros');
// 切割节点模块

// 自定义全局方法
let request = require('../_request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
module.exports = function (name) {
  return new Promise((resolve, reject) => {
    let url = 'https://www.boquge.com/search.htm?keyword=' + encodeURI(name);
    let novelList = [];
    request(url, function (err, res, body) {
      if (err) {
        reject(err)
      } else {
        let html = iconv.decode(body, 'gb2312');
        let $ = cheerio.load(html, {
          decodeEntities: false,
        });
        let clearfix = $('.clearfix');
        let _length = clearfix.length > 20 ? 20 : clearfix.length;
        for (let i = 1; i < _length; i++) {
          novelList.push({
            // 类型: types
            'types': clearfix.eq(i).children('.col-xs-1').children('.tag-blue').html(),
            // 小说名称:novel
            'novel': clearfix.eq(i).children('.col-xs-3').children('a').html(),
            'novel_url': 'https://www.boquge.com' + clearfix.eq(i).children('.col-xs-3').children('a').attr('href'),
            // 最新章节:chapter
            'chapter': clearfix.eq(i).children('.col-xs-4').children('a').html(),
            'chapter_url': 'https://www.boquge.com' + clearfix.eq(i).children('.col-xs-4').children('a').attr('href'),
            // 作者:author
            'author': clearfix.eq(i).children('.col-xs-2').eq(0).html(),
            // 更新时间:update_time
            'update_time': clearfix.eq(i).children('.col-xs-2').eq(1).children('.time').html()
          })
        }
        /*// 类型: types
        console.log(clearfix.eq(5).children('.col-xs-1').children('.tag-blue').children('i').html());
        // 小说名称:novel
        console.log(clearfix.eq(5).children('.col-xs-3').children('a').html());
        console.log(clearfix.eq(5).children('.col-xs-3').children('a').attr('href'));
        // 最新章节:chapter
        console.log(clearfix.eq(5).children('.col-xs-4').children('a').html());
        console.log(clearfix.eq(5).children('.col-xs-4').children('a').attr('href'));
        // 作者:author
        console.log(clearfix.eq(5).children('.col-xs-2').eq(0).html());
        // 更新时间:update_time
        console.log(clearfix.eq(5).children('.col-xs-2').eq(1).children('.time').html());*/
        resolve(novelList);
      }
    });


    /*ajax('https://www.boquge.com/search.htm?keyword=' + p.name)
      .then(res => {
        console.log(8);
        var converterStream = iconv.decodeStream('gb2312');
        res.pipe(converterStream);

        converterStream.on('data', function (str) {
          console.log(str); // Do something with decoded strings, chunk-by-chunk.
        });

        // let html = iconv.decode(res, 'gb2312');
        // let $ = cheerio.load(html, { decodeEntities: false });
        // let clearfix = $('.list-group-item.clearfix');
        // console.log(
        //   clearfix
        //     .eq(5)
        //     .children('.col-xs-1 .tag-blue')
        //     .html()
        // );
        // let resultList = $('div.result-game-item-detail');
        resolve('ok');
      })
      .catch(err => {
        reject(err);
      });*/
  });
};
/*
<div class="col-xs-1"><i class="tag-blue">都市</i></div>
<div class="col-xs-3"><a href="/xs/70705/index.html">乡村极品妖孽</a></div>
<div class="col-xs-4"><a href="/book/70705/152946043.html">第749章 活人倒地，死人翻身</a></div>
<div class="col-xs-2">君流香N</div>
<div class="col-xs-2"><span class="time">2018-04-17 00:05</span></div>
类型: types
小说名称:novel
最新章节:chapter
作者:author
更新时间:update_time
<div class="col-xs-1">类型</div>
<div class="col-xs-3">小说名称</div>
<div class="col-xs-4">最新章节</div>
<div class="col-xs-2">作者</div>
<div class="col-xs-2">更新时间</div>
*/
