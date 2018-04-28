module.exports = function (title, content) {
  function page() {
    let html = '';
    for (let i in content) {
      console.log(content[i])
      content[i] = content[i].replace(/\s+/g, '');
      html += `  ${content[i]}<br/>\n`;
    }
    return html;
  }

  let html = `### ${title}\n${page()}`;
  return html;
};
