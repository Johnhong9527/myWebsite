// 模块
const fs = require('fs');
// 自定义全局方法
const request = require('../_request');
// kindle模块
const kindle_opf = require('../util/opf');
const kindle_toc = require('../util/toc');
const kindle_toc_ncx = require('../util/toc_ncx');
const kindle_text = require('../util/text');
const _list = require('./list');
module.exports = function (params) {
  return new Promise((resolve, reject) => {
    let i = 0, list = [], books = [];
    // book_name(params.index).then(bookName)
    // 创建文件夹
    fs.exists(__dirname + `/book/${params.index}`, function (exists) {
      if (!exists) {
        fs.mkdir(__dirname + `/book/${params.index}`, function (err) {
          if (err)
            throw err;
          console.log(`/book/${params.index}  创建成功`);
        });
      }
    });

    fs.exists(__dirname + `/book/${params.index}/page`, function (exists) {
      if (!exists) {
        fs.mkdir(__dirname + `/book/${params.index}/page`, function (err) {
          if (err)
            throw err;
          console.log(`/book/${params.index}/page  创建成功`);
        });
      }
    });
    /*

    fs.exists(__dirname + `/book/${params.index}/page`, function (exists) {
            if (!exists) {
              fs.mkdir(__dirname + `/book/${params.index}/page`, function (err) {
                if (err)
                  throw err;
                console.log(`/book/${params.index}/page  创建成功`);
              });
            }
          });
     */

    // 获取章节列表
    _list(params.novel_list).then(sres => {
      list = sres
      // opf
      fs.writeFile(__dirname + `/book/${params.index}/${params.index}.opf`, kindle_opf(params.novel, sres), function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log(`/book/${params.index}/${params.index}.opf写入成功`);
        }
      });
      // toc.html
      fs.writeFile(__dirname + `/book/${params.index}/toc.html`, kindle_toc(sres), function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log(`/book/${params.index}/toc.html写入成功`);
        }
      });
      // toc.ncx
      fs.writeFile(__dirname + `/book/${params.index}/toc.ncx`, kindle_toc_ncx(params.novel, sres), function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log(`/book/${params.index}/toc.ncx写入成功`);
        }
      });
      down();
    });

    function down() {
      let time = setTimeout(() => {
        if (i == list.length - 1) {
          clearInterval(time);
          fs.writeFile(__dirname + `/book/${params.index}/${params.index}.json`, JSON.stringify(books), function (err) {
            if (err) {
              console.error(err);
            } else {
              console.log(`/book/${params.index}/${params.index}.json写入成功`);
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
            fs.writeFile(__dirname + `/book/${params.index}/page/text${list[i].index}.html`, kindle_text(list[i], content), function (err) {
              if (err) {
                console.error(err);
              } else {
                console.log(`/book/${params.index}/page/text${list[i].index}.html写入成功`);
                i++;
                down();
              }
            });
          }).catch(err => {
            reject(err)
          });
        }
      }, 400)
    }


    // for (let i = 0; i < list.length; i++) {
    //   console.log(list[i].title_url)
    // }
    // console.log(8)
    // resolve('ok');
    // request(url).then($ => {
    //   let chapters_list = $('#chapters-list li');
    //   if (chapters_list && chapters_list.length > 0) {
    //     let _length = chapters_list.length > 20 ? 20 : chapters_list.length;
    //     let novelList = [];
    //     for (let i = 0; i < _length; i++) {
    //       novelList.push({
    //         'title': chapters_list.eq(i).children('a').html(),
    //         'title_url': 'https://www.boquge.com' + chapters_list.children('a').attr('href')
    //       })
    //     }
    //     resolve(novelList)
    //   } else {
    //     reject('获取失败');
    //   }
    // })
  })
}

function book_name(name) {
  return new Promise((resolve, reject) => {
    // 创建文件夹
    fs.exists(__dirname + `/book/${name}/page`, function (exists) {
      if (!exists) {
        fs.mkdir(__dirname + `/book/${name}/page`, function (err) {
          if (err) {
            throw err;
            reject(err)
          }
          console.log(`/book/${name}/page  创建成功`);
          resolve(true)
        });
      } else {
        resolve(true)
      }
    });
  })
}

function book_page(name) {
  return new Promise((resolve, reject) => {
    // 创建文件夹
    fs.exists(__dirname + `/book/${params.index}`, function (exists) {
      if (!exists) {
        fs.mkdir(__dirname + `/book/${params.index}`, function (err) {
          if (err) {
            throw err;
            reject(err)
          }
          console.log(`/book/${params.index}  创建成功`);
          resolve(true)
        });
      } else {
        resolve(true)
      }
    });
  })
}
