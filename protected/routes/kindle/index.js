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

// 自定义全局方法
let request = require('./_request');
// 测试地址
// https://www.boquge.com/book/73088/

let toc = require('./toc');

// 数据
let books = [],
  booksUrl = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  let _res = res;
  res.send('ok');
  res.sendFile(path.join(__dirname + 'kindle/index.html'));
  return;
  let url = 'https://www.boquge.com/book/73088';
  let contents = [];
  request(url, function(err, res, body) {
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

router.get('/shell', function(req, res, next) {
  res.send('123');
});

router.get('/search', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('ok');
  let params = URL.parse(req.url, true).query;
  console.log(params);

  request('https://www.boquge.com/search.htm?keyword=' + params.name, function(
    err,
    res,
    body
  ) {
    console.log('start')
    console.log(body)
    console.log(res)
    return;
    let html = iconv.decode(body, 'gb2312');
    let $ = cheerio.load(html, {
      decodeEntities: false,
    });
    let clearfix = $('.list-group-item.clearfix');
    console.log(clearfix.eq(0).html());
    console.log('end');
  });

  return;
  request
    .get('https://www.boquge.com/search.htm?keyword=' + params.name)
    .charset('UTF-8')
    .end(function(req, resq) {
      console.log(req);
      console.log(resq);
      // if (resq.text) {
      //   // 将数据存入字典中
      //   if (dictionary.size() > 50) {
      //     dictionary.clear();
      //   }
      //   dictionary.set(url_str, resq.text);
      //   resolve(resq.text);
      // } else {
      //   reject(false);
      // }
    });

  return;
  _cros(req)
    .then(_res => {
      res.send(_res);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
