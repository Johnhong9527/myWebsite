module.exports = function (list) {
  function page(list) {
    let html = ''
    for (let i in list) {
      html += `<li><a href="page/text${list[i].index}.html#id${list[i].index}">${list[i].title}</a></li>\n`
    }
    return html
  }

  let html = `<!DOCTYPE html>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="zh" xml:lang="zh">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>TOC</title>
</head>
<body>
<h1 id="toc">目录</h1>
<ul>

${page(list)}

</ul>
</body>
</html>
`
  return html
}