module.exports = function (text) {
  function page(text) {
      let html = ''
    html += `<h3 style="text-align: center;width: 100%" id="id${text.index}">${text.title}</h3><p>`;
    for(let i in text.content){
      html+= `${text.content[i]}\n`
    }
    html +='</p>'
    return html
  }
  let html = `<!DOCTYPE html>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="zh" xml:lang="zh">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Text Styling</title>
</head>
<body>
${page(text)}
</body>
</html>`;
  return html
}