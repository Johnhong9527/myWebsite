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
const nodeEmail = require('./util/_nodemailer');
// 自定义全局方法
let request = require('./util/_request');
// boquge模块
const _search = require('./boquge/search');
const _list = require('./boquge/list');
const _down = require('./boquge/down');

// kindle模块
const kindle_opf = require('./util/opf');
const kindle_toc = require('./util/toc');
const kindle_toc_ncx = require('./util/toc_ncx');
const kindle_text = require('./util/text');

// gitbook模块
const gitbook_summary = require('./gitbook/summary');
const gitbook_html = require('./gitbook/html');
const gitbook_down = require('./gitbook/down');
router.get('/gitbook', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  res.send(params);
  gitbook_down(params)
    .then(sres => console.log(sres))
    .catch(e => console.log(res.send(e)));
});

// 自定义变量
router.get('/read', function(req, res, next) {
  let result = JSON.parse(fs.readFileSync(__dirname + '/boquge/39924.json'));
  let book = '',
    nav = '';
  // opf
  fs.writeFile(
    __dirname + `/book/book.opf`,
    kindle_opf('book', result),
    function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`/book/book.opf写入成功`);
      }
    }
  );
  // text.html
  for (let i in result) {
    fs.writeFile(
      __dirname + `/book/page/text${result[i].index}.html`,
      kindle_text(result[i], result[i].content),
      function(err) {
        if (err) {
          console.error(err);
        } else {
          console.log(`text${result[i].index}.html写入成功`);
        }
      }
    );
  }
  // toc.html
  fs.writeFile(__dirname + `/book/toc.html`, kindle_toc(result), function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`/book/toc.html写入成功`);
    }
  });
  // toc.ncx
  fs.writeFile(
    __dirname + `/book/toc.ncx`,
    kindle_toc_ncx('book', result),
    function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`/book/toc.ncx写入成功`);
      }
    }
  );

  res.send('ok');
});
// index
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + 'kindle/doc.html'));
});
// 搜索
router.get('/search', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  _search(params.name)
    .then(sres => {
      res.send(sres);
    })
    .catch(err => {
      res.send(err);
    });
});
/* 浏览器输入地址（如127.0.0.1:3000/sned）后即发送 */
router.get('/send', function(req, res, next) {
  let r = res;
  // r.render('index', { title: 132 });
  nodeEmail({
    name: '凡人修仙之仙界篇.mobi',
    email: 'honghaitzz@sina.com',
  })
    .then(_res => {
      // console.log(_res);

      r.render('index', { title: '已接收：' + _res.accepted });
    })
    .catch(_err => {
      // console.log(_err);
      r.render('index', { title: _err });
    });
});
// 下载接口
router.get('/down', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  res.send(params);
  _down(params)
    .then(sres => console.log(sres))
    .catch(e => console.log(res.send(e)));
});
// 获取章节列表
router.get('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;
  _list(params.url)
    .then(sres => {
      res.send(sres);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
