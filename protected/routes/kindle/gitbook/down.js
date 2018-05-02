// 模块
const fs = require('fs');
const shell = require('shelljs');
// 自定义全局方法
const request = require('../util/_request');
// 获取数据源
const _list = require('../boquge/list');
// gitbook模块
const gitbook_readme = require('./readme');
const gitbook_summary = require('./summary');
const gitbook_html = require('./html');
module.exports = function(params) {
  return new Promise((resolve, reject) => {
    let i = 0,
      list = [],
      books = [],
      path = '';
    // 创建文件夹
    mkdir(params.index)
      .then(mkdirName => {
        if (mkdirName) {
          // 获取章节列表
          path = `./gitbook/${params.index}`;
          _list(params.novel_list).then(sres => {
            list = sres;
            // readme.md
            fs.writeFile(`${path}/README.md`, gitbook_readme(params), function(
              err
            ) {
              if (err) {
                console.error(err);
              } else {
                console.log(`${path}/README.md 写入成功`);
              }
            });
            // gitbook_summary
            fs.writeFile(`${path}/summary.md`, gitbook_summary(sres), function(
              err
            ) {
              if (err) {
                console.error(err);
              } else {
                console.log(`${path}/summary.md 写入成功`);
              }
            });
            down();
          });

          function down() {
            let time = setTimeout(() => {
              if (i === list.length) {
                clearInterval(time);
                fs.writeFile(
                  `${path}${params.index}.json`,
                  JSON.stringify(books),
                  function(err) {
                    if (err) {
                      console.error(err);
                    } else {
                      shell.exec(
                        `cd ${path} && gitbook mobi ./ ./${params.index}.mobi`
                      );
                    }
                  }
                );
                resolve('下载完毕');
              } else if (list[i]) {
                request(list[i].title_url)
                  .then($ => {
                    let content = $('#txtContent').html();
                    content = content.replace(
                      /<div class="gad2"><script type="text\/javascript">try{mad1\(\);} catch\(ex\){}<\/script><\/div>/g,
                      ' '
                    );
                    content = content.split('<br>');
                    books.push({
                      title: list[i].title,
                      index: i + 1,
                      content: content,
                    });
                    fs.writeFile(
                      `${path}/page/text${list[i].index}.md`,
                      gitbook_html(list[i].title, content),
                      function(err) {
                        if (err) {
                          console.error(err);
                        } else {
                          i++;
                          down();
                        }
                      }
                    );
                  })
                  .catch(err => {
                    reject(err);
                  });
              }
            }, 500);
          }
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

function mkdir(name) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(`./gitbook`) === false) {
      fs.mkdir(`./gitbook`, '0777', function(err) {
        if (err) {
          reject(`./gitbook  创建失败`);
          throw err;
        }
      });
    }
    // 删除原有文件
    shell.exec(
      `rm -rf ./gitbook/${name} ./gitbook/${name}/page && mkdir ./gitbook/${name} ./gitbook/${name}/page`
    );
    resolve(true);
  });
}
