module.exports = function(item, content) {
  function page() {
    let html = '';
    html += `<h3 id="id${item.index}">${item.title}</h3>`;
    for (let i in content) {
      html += `<p>${content[i]}</p>`;
    }
    return html;
  }

  let html = `
<html  xmlns="http://www.w3.org/1999/xhtml" lang="zh" xml:lang="zh">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<body>
${page()}
</body>
</html>
`;
  return html;
};
