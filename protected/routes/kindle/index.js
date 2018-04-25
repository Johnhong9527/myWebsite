'use strict';
const express = require('express');
const router = express.Router();
const iconv = require('iconv-lite');

// 切割节点模块
const cheerio = require('cheerio');
// 本地文件读写模块
const fs = require('fs');
// 获取数据
const URL = require('url');
// 路径
const path = require('path');
// email
const nodeEmail = require('./_nodemailer');
// 网络请求
const _cros = require('./_cros');

// 搜索模块
const _search = require('./boquge/search');
const _list = require('./boquge/list');
const _down = require('./boquge/down');

// kindle模板
const kindle_opf = require('./util/opf');
const kindle_toc = require('./util/toc');
const kindle_toc_ncx = require('./util/toc_ncx');
const kindle_text = require('./util/text');
router.get('/read', function (req, res, next) {
  let result = JSON.parse(fs.readFileSync(__dirname + '/boquge/book.json'));
  let book = '', nav = '';
  // opf
  fs.writeFile(__dirname + `/book/book.opf`, kindle_opf('book', result), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`/book/book.opf写入成功`);
    }
  });
  // text.html
  for (let i in result) {
    fs.writeFile(__dirname + `/book/page/text${result[i].index}.html`, kindle_text(result[i]), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`text${result[i].index}.html写入成功`);
      }
    });
  }
  // toc.html
  fs.writeFile(__dirname + `/book/toc.html`, kindle_toc(result), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`/book/toc.html写入成功`);
    }
  });
  // toc.ncx
  fs.writeFile(__dirname + `/book/toc.ncx`, kindle_toc_ncx(result), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`/book/toc.ncx写入成功`);
    }
  });

  res.send(result);

  return;
  // 创建文件夹
  fs.exists(__dirname + '/book', function (exists) {
    if (!exists) {
      fs.mkdir(__dirname + '/book', function (err) {
        if (err)
          throw err;
        console.log('创建目录成功');
      });
    }
    // 创建目录
    nav = '﻿<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body><nav epub:type="toc"><ol>'
    Object.keys(result).forEach(key => {
      nav += `<li><a href="Sway_body.html#part_${key}">${result[key].title}</a></li>`
    })
    nav += `</ol></nav></body></html>`
    fs.writeFile(__dirname + '/book/nav.html', nav, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('写入成功');
      }
    });

  });
  /*Object.keys(result).forEach(key => {
    book += `<div style="margin-left:2%;>${result[key].title}</div>`
  })*/
  /*Object.keys(result).forEach(key => {
    // console.log(result[key])
    // console.log(result[key].content)
    book +=`<h3 style="text-align: center;line-height: 2;">${result[key].title}</h3>`;
    for(let i in result[key].content){
      book +=`<div>${result[key].content[i]}</div>`;
    }
  });*/
  /*fs.writeFile(__dirname + '/test.html', book, function (err) {
    if(err) {
      console.error(err);
    } else {
      console.log('写入成功');
    }
  });*/
  res.send(result);
})

/* 浏览器输入地址（如127.0.0.1:3000/sned）后即发送 */
router.get('/send', function (req, res, next) {
  let r = res;
  // r.render('index', { title: 132 });
  nodeEmail({
    name: '凡人修仙之仙界篇.mobi',
    email: 'honghaitzz@sina.com',
  })
    .then(_res => {
      // console.log(_res);

      r.render('index', {title: '已接收：' + _res.accepted});
    })
    .catch(_err => {
      // console.log(_err);
      r.render('index', {title: _err});
    });
});

// 自定义全局方法
let request = require('./_request');
// 测试地址
// https://www.boquge.com/book/73088/

let toc = require('./toc');

// 数据
let books = [],
  booksUrl = [];
/* GET home page. */

router.get('/', function (req, res, next) {

  let _res = res;
  res.send('ok');
  res.sendFile(path.join(__dirname + 'kindle/index.html'));
  return;
  let url = 'https://www.boquge.com/book/73088';
  let contents = [];
  request(url, function (err, res, body) {
    let html = iconv.decode(body, 'gb2312');
    let $ = cheerio.load(html, {
      decodeEntities: false,
    });
    let $li_list = $('#chapters-list li');
    for (let i = 0, j = 0; i < $li_list.length; i++) {
      if ($li_list.eq(i).attr('class') != 'volumn') {
        contents.push({
          index: $li_list
            .eq(i)
            .children('a')
            .html()
            .split(' ')[0],
          title: $li_list
            .eq(i)
            .children('a')
            .html()
            .split(' ')[1],
          url:
          'https://www.boquge.com' +
          $li_list
            .eq(i)
            .children('a')
            .attr('href'),
          id: j++,
        });
      }
    }
    setTimeout(() => {
      _res.send(contents);
      toc(contents);
    }, 100);
  });
});

router.get('/shell', function (req, res, next) {
  res.send('123');
});

router.get('/down', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  _list(params.url).then(sres => {
    // res.send(sres)
    // console.log(109)
    _down(sres).then(r => {
      // console.log(r)
      res.send(r)
    }).catch(e => {
      res.send(err)
    })
  }).catch(err => {
    res.send(err)
  })
})

router.get('/list', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  _list(params.url).then(sres => {
    res.send(sres)
  }).catch(err => {
    res.send(err)
  })
})
router.get('/search', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  _search(params.name).then(sres => {
    res.send(sres)
  }).catch(err => {
    res.send(err);
  })
  // request('https://www.boquge.com/search.htm?keyword=' + params.name, function(
  //   err,
  //   res,
  //   body
  // ) {
  //   console.log('start')
  //   // console.log(body)
  //   // console.log(res)
  //   // return;
  //   let html = iconv.decode(body, 'gb2312');
  //   let $ = cheerio.load(html, {
  //     decodeEntities: false,
  //   });
  //   let clearfix = $('.list-group-item.clearfix');
  //   console.log(clearfix.eq(5).html());
  //   console.log('end');
  // });

  // return;
  // request
  //   .get('https://www.boquge.com/search.htm?keyword=' + params.name)
  //   .charset('UTF-8')
  //   .end(function(req, resq) {
  //     console.log(req);
  //     console.log(resq);
  //     // if (resq.text) {
  //     //   // 将数据存入字典中
  //     //   if (dictionary.size() > 50) {
  //     //     dictionary.clear();
  //     //   }
  //     //   dictionary.set(url_str, resq.text);
  //     //   resolve(resq.text);
  //     // } else {
  //     //   reject(false);
  //     // }
  //   });

  // return;
  // _cros(params)
  //   .then(_res => {
  //     res.send(_res);
  //   })
  //   .catch(err => {
  //     res.send(err);
  //   });
});

module.exports = router;
