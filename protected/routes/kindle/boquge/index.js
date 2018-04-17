const cros = require('../_cros');
// 单个章节

module.exports = class boquge {
  constructor() {
    this.items = {};
  }
  // 搜索
  search(name) {
    cros(name)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  search = 'https://www.boquge.com/search.htm?keyword=%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92';
  // 获取所有章节目录
  // 获取单个章节内容
};
