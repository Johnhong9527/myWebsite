'use strict';
// 本地文件读写模块
var fs = require('fs');
// 执行shell
const shell = require('shelljs');
let iconv = require('iconv-lite');
// 切割节点模块
const cheerio = require('cheerio');
// 自定义全局方法
let request = require('./_request');
// body...
let $body = '';
let $title = '';
let toc = function (argument) {
  down();
  // let $index = 0, $length = argument.length, newArgument = [];
  let $index = 0, $length = 3, newArgument = [];

  function down() {
    let time = setTimeout(() => {
      if ($index == $length) {
        clearTimeout(time);
        for (let i = 0; i < newArgument.length; i++) {
          console.log(i);
          $body += list(newArgument[i])
        }
        next()
      }
      if ($index < $length) {
        request(argument[$index].url, function (err, res, body) {
          let html = iconv.decode(body, 'gb2312');
          let $ = cheerio.load(html, {
            decodeEntities: false
          });
          if ($title == '' && $index == 1) {
            $title = $('header li.active a').html();
          }
          argument[$index].txtContent = $('#txtContent').html().slice(40);
          newArgument.push(argument[$index]);
          console.log($index);
          $index++;
          down();
        })
      }
    }, 400)
  }

  function next() {
    let html = `<html><head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<style>
	p { margin-top: 1em; text-indent: 0em; }
	h1 {margin-top: 1em}
	h2 {margin: 2em 0 1em; text-align: center; font-size: 2.5em;}
	h3 {margin: 0 0 2em; font-weight: normal; text-align:center; font-size: 1.5em; font-style: italic;}
	.center { text-align: center; }
	.pagebreak { page-break-before: always; }
</style>
<body>
<!-- Your book goes here -->
${$body}
</body>
</html>`;

    // 将处理完毕的数据保存到本地
    const path = '../Downloads/'; // 保存路径设置,这里之科协绝对路径
    // var text_name = path + books_name + '.txt'; // 保存文件路径已经名字
    const text_name = path + $title + '.html'; // 保存文件路径已经名字
    fs.writeFile(text_name, html, function (err) {
      if (err) {
        return console.error(err);
      }
      console.log("数据写入成功！");
      // console.log("--------我是分割线-------------")
      // console.log("读取写入的数据！");
      shell.cd('../Downloads');
      shell.exec('cd ../Downloads/ && kindlegen ' + $title + '.html').stdout;
      // shell.exec('kindlegen'+ text_name).stdout;
      return;
      fs.readFile(text_name, function (err, data) {
        if (err) {
          return console.error(err);
        }
        // console.log("异步读取文件数据: " + data.toString());
      });
    });
  }
};

// 目录
function list(item) {
  let s = `<h3><b>${item.index}<br /><a href="UG-C10.html">${item[1] != undefined ? item.title : ''}</a></b></h3><br/><pre>${item.txtContent}</pre>`;
  return s
}

module.exports = toc;