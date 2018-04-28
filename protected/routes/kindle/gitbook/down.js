// 模块
const fs = require('fs');
// 自定义全局方法
const request = require('../util/_request');
//
const _list = require('../boquge/list');
// gitbook模块
const gitbook_readme = require('./readme');
const gitbook_summary = require('./summary');
const gitbook_html = require('./html');
const gitbook = require('./gitbook');
// kindle模块
const kindle_opf = require('../util/opf');
const kindle_toc = require('../util/toc');
const kindle_toc_ncx = require('../util/toc_ncx');
const kindle_text = require('../util/text');
const kindlegen = require('../util/kindlegen');
module.exports = function (params) {
  return new Promise((resolve, reject) => {
    let i = 0, list = [], books = [];
    // 创建文件夹
    mkdir(params.index).then(mkdirName => {
      if (mkdirName) {
        // 获取章节列表
        _list(params.novel_list).then(sres => {
          list = sres;
          console.log(list[list.length - 1].title);
          // readme.md
          fs.writeFile(`./gitbook/${params.index}/README.md`, gitbook_readme(params), function (err) {
            if (err) {
              console.error(err);
            } else {
              console.log(`./gitbook/${params.index}/README.md 写入成功`);
            }
          });
          // gitbook_summary
          fs.writeFile(`./gitbook/${params.index}/summary.md`, gitbook_summary(sres), function (err) {
            if (err) {
              console.error(err);
            } else {
              console.log(`./gitbook/${params.index}/summary.md 写入成功`);
            }
          });

          down();
        });

        function down() {
          let time = setTimeout(() => {
            if (i == list.length) {
              clearInterval(time);
              fs.writeFile(`./gitbook/${params.index}/${params.index}.json`, JSON.stringify(books), function (err) {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`./gitbook/${params.index}/${params.index}.json写入成功`);
                  console.log('开始执行打包程序');
                  gitbook(params.index);
                }
              });
              resolve('下载完毕');
            } else if (list[i]) {
              request(list[i].title_url).then($ => {
                let content = $('#txtContent').html();
                content = content.replace(/<div class="gad2"><script type="text\/javascript">try{mad1\(\);} catch\(ex\){}<\/script><\/div>/g, ' ');
                content = content.split('<br>');
                books.push({
                  'title': list[i].title,
                  'index': i + 1,
                  'content': content
                })
                // console.log(list[i].index)
                fs.writeFile(`./gitbook/${params.index}/page/text${list[i].index}.md`, gitbook_html(list[i].title, content), function (err) {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log(`./gitbook/${params.index}/page/text${list[i].index}.md 写入成功`);
                    i++;
                    down();
                  }
                });
              }).catch(err => {
                reject(err)
              });
            }
          }, 500)
        }
      }
    }).catch(err => {
      reject(err);
    })
  })
}

function mkdir(name) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(`./gitbook`)) {
      fs.mkdir(`./gitbook`,'0777', function (err) {
        if (err) {
          reject(`./gitbook  创建失败`);
          throw err;
        }
        console.log(`./gitbook  创建成功`);
      });
    }
    if (!fs.existsSync(`./gitbook/${name}`)) {
      fs.mkdir(`./gitbook/${name}`, '0777',function (err) {
        if (err) {
          reject(`./gitbook/${name}  创建失败`);
          throw err;
        }
        console.log(`./gitbook/${name}  创建成功`);
      })
    }
    if (!fs.existsSync(`./gitbook${name}/page`)) {
      fs.mkdir(`./gitbook/${name}/page`, '0777',function (err) {
        if (err) {
          reject(`./gitbook/${name}/page 构建失败`);
          throw err;
        }
        console.log(`./gitbook${name}/page  创建成功`);
      })
    }
    resolve(true)
  })
}