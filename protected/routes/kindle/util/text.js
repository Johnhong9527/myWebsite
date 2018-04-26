/*
module.exports = function (item, content) {
  function page() {
    let html = ''
    html += `<h3 style="text-align: center;width: 100%" id="id${item.index}">${item.title}</h3><p>`;
    for (let i in content) {
      html += `${content[i]}\n`
    }
    html += '</p>'
    return html
  }

  let html = `<!DOCTYPE html>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="zh" xml:lang="zh">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Text Styling</title>
</head>
<body>
${page()}
</body>
</html>`;
  return html
}*/


module.exports = function (item, content) {
  function page() {
    let html = '';
    html += `<h3 id="id${item.index}">${item.title}</h3>`;
    for (let i in content) {
      html += `<p>${content[i]}</p>`
    }
    return html
  }

  let html = `
<html  xmlns="http://www.w3.org/1999/xhtml" lang="zh" xml:lang="zh">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<body>
${page()}
</body>
</html>
`;
  return html
}