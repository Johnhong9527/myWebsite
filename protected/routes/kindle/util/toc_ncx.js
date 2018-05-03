module.exports = function(name, list) {
  function page() {
    let html = '';
    for (let i in list) {
      html += `<navPoint id="navpoint-${Number.parseInt(i) +
        2}" playOrder="${Number.parseInt(i) + 2}"><navLabel><text>${
        list[i].title
      }</text></navLabel><content src="page/text${list[i].index}.html#id${
        list[i].index
      }"/></navPoint>`;
    }
    return html;
  }

  let html = `<?xml version="1.0"?>
<!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN" 
   "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd">
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  </head>
  <docTitle>
    <text>${name}</text>
  </docTitle>
<navMap>
<navPoint id="navpoint-1" playOrder="1"><navLabel><text>Content</text></navLabel><content src="toc.html#toc"/></navPoint>
${page()}
</navMap>
</ncx>`;
  return html;
};
