module.exports = function(list) {
  function page() {
    let html = '';
    for (let i = 0; i < list.length; i++) {
      // for (let i = 0; i < 1000; i++) {
      html += `* [${list[i].title}](/page/text${list[i].index}.md)\n`;
    }
    return html;
  }
  let html = `# Summary\n${page()}`;
  return html;
};
