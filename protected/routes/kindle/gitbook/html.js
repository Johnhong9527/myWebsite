module.exports = function(content) {
  function page() {
    let html = '';
    for (let i in content.content) {
      content.content[i] = content.content[i].replace(/\s+/g, '');
      html += `  ${content.content[i]}<br/>\n`;
    }
    return html;
  }

  let html = `### ${content.title}\n${page()}`;
  return html;
};
