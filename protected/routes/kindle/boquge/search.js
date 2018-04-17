const ajax = require('../_cros');
// 切割节点模块
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
module.exports = function(p) {
  return new Promise((resolve, reject) => {
    request('https://www.boquge.com/search.htm?keyword=' + p.name, function(
      err,
      res,
      body
    ) {
      console.log('start');
      let html = iconv.decode(body, 'gb2312');
      let $ = cheerio.load(html, {
        decodeEntities: false,
      });
      let clearfix = $('.list-group-item.clearfix');
      console.log(clearfix.eq(5).html());
      console.log('end');
    });

    ajax('https://www.boquge.com/search.htm?keyword=' + p.name)
      .then(res => {
        console.log(8);

        var converterStream = iconv.decodeStream('gb2312');
        res.pipe(converterStream);

        converterStream.on('data', function(str) {
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
      });
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
