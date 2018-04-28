module.exports = function (params) {
  let html = '# 简介\n' +
    '\n' +
    '小说名称：'+params.novel+'<br/>\n' +
    '作者：'+params.author+'<br/>\n' +
    '最新章节：'+params.chapter+'<br/>\n' +
    '更新时间：'+params.update_time+'<br/>\n' +
    '\n';
  return html;
}