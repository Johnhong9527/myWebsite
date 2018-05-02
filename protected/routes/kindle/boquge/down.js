// 模块
const fs = require('fs');
// 自定义全局方法
const request = require('../util/_request');
// kindle模块
const kindle_opf = require('../util/opf');
const kindle_toc = require('../util/toc');
const kindle_toc_ncx = require('../util/toc_ncx');
const kindle_text = require('../util/text');
const _list = require('./list');
const kindlegen = require('../util/kindlegen');
module.exports = function(params) {
  return new Promise((resolve, reject) => {
    let i = 0,
      list = [],
      books = [];
    // 创建文件夹
    mkdir(params.index)
      .then(mkdirName => {
        if (mkdirName) {
          // 获取章节列表
          _list(params.novel_list).then(sres => {
            list = sres;
            console.log(list[list.length - 1].title);
            // opf
            fs.writeFile(
              `./book/${params.index}/${params.index}.opf`,
              kindle_opf(params.novel, sres),
              function(err) {
                if (err) {
                  console.error(err);
                } else {
                  console.log(
                    `/book/${params.index}/${params.index}.opf写入成功`
                  );
                }
              }
            );
            // toc.html
            fs.writeFile(
              `./book/${params.index}/toc.html`,
              kindle_toc(sres),
              function(err) {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`/book/${params.index}/toc.html写入成功`);
                }
              }
            );
            // toc.ncx
            fs.writeFile(
              `./book/${params.index}/toc.ncx`,
              kindle_toc_ncx(params.novel, sres),
              function(err) {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`./book/${params.index}/toc.ncx写入成功`);
                }
              }
            );
            down();
          });

          function down() {
            let time = setTimeout(() => {
              if (i == list.length) {
                clearInterval(time);
                fs.writeFile(
                  `./book/${params.index}/${params.index}.json`,
                  JSON.stringify(books),
                  function(err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log(
                        `./book/${params.index}/${params.index}.json写入成功`
                      );
                      console.log('正在执行打包程序');
                      kindlegen(params.index);
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
                    // console.log(list[i].index)
                    fs.writeFile(
                      `./book/${params.index}/page/text${list[i].index}.html`,
                      kindle_text(list[i], content),
                      function(err) {
                        if (err) {
                          console.error(err);
                        } else {
                          console.log(
                            `./book/${params.index}/page/text${
                              list[i].index
                            }.html写入成功`
                          );
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
            }, 1000);
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
    if (!fs.existsSync(`./book`)) {
      fs.mkdir(`./book`, function(err) {
        if (err) {
          reject(`./book  创建失败`);
          throw err;
        }
        console.log(`./book  创建成功`);
      });
    }
    if (!fs.existsSync(`./book/${name}`)) {
      fs.mkdir(`./book/${name}`, function(err) {
        if (err) {
          reject(`./book/${name}  创建失败`);
          throw err;
        }
        console.log(`./book/${name}  创建成功`);
      });
    }
    if (!fs.existsSync(`./book${name}/page`)) {
      fs.mkdir(`./book/${name}/page`, function(err) {
        if (err) {
          reject(`./book/${name}/page 构建失败`);
          throw err;
        }
        console.log(`./book${name}/page  创建成功`);
      });
    }
    resolve(true);
  });
}
