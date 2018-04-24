// http://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html#comment_tip
var tpl = '<h3>h3</h3><% for(var i = 0; i < this.posts.length; i++) {' +
  'var post = this.posts[i]; %>' +
  '<% if(!post.expert){ %>' +
  '<span>post is null</span>' +
  '<% } else { %>' +
  '<a href="#"><% post.expert %> at <% post.time %></a>' +
  '<% } %>' +
  '<% } %>';

var data = {
  "posts": [{
    "expert": "content 1",
    "time": "yesterday"
  },{
    "expert": "content 2",
    "time": "today"
  },{
    "expert": "content 3",
    "time": "tomorrow"
  },{
    "expert": "",
    "time": "eee"
  }]
};

var tplEngine = function(tpl, data) {
  var reg = /<%([^%>]+)?%>/g,
    regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = 'var r=[];\n',
    cursor = 0;

  var add = function(line, js) {
    js? (code += line.match(regOut) ? line + '\n' : 'r.push(' + line + ');\n') :
      (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
    return add;
  }
  while(match = reg.exec(tpl)) {
    add(tpl.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }
  add(tpl.substr(cursor, tpl.length - cursor));
  code += 'return r.join("");';
  console.log(code);
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
};

console.log(tplEngine(tpl,data));
module.exports = function (name, list) {
  let html = `<?xml version="1.0" encoding="iso-8859-1"?>
<package unique-identifier="uid" xmlns:opf="http://www.idpf.org/2007/opf" xmlns:asd="http://www.idpf.org/asdfaf">
    <metadata>
        <dc-metadata xmlns:dc="http://purl.org/metadata/dublin_core"
                     xmlns:oebpackage="http://openebook.org/namespaces/oeb-package/1.0/">
            <dc:Title>${name}</dc:Title>
            <dc:Language>zh</dc:Language>
            <dc:Creator>Amazon.com</dc:Creator>
            <dc:Copyrights>Amazon.com</dc:Copyrights>
            <dc:Publisher>Amazon.com</dc:Publisher>
            <x-metadata>
                <EmbeddedCover>images/cover.jpg</EmbeddedCover>
            </x-metadata>
        </dc-metadata>
    </metadata>
    <manifest>
        <item id="content" media-type="text/x-oeb1-document" href="toc.html"></item>
        <item id="ncx" media-type="application/x-dtbncx+xml" href="toc.ncx"/>
        <% for(let i in list.length) { %>
            <item id="text${i+1}" media-type="text/x-oeb1-document" href="page/text${i+1}.html"></item>
        <% } %>        
    </manifest>
    <spine toc="ncx">
        <itemref idref="content"/>
        <% for(let i in list.length) { %>
            <itemref idref="text${i}"/>
        <% } %> 
		</spine>
    <guide>
        <reference type="toc" title="Table of Contents" href="toc.html"/>
         <reference type="text" title="Book" href="text1.html"/>
    </guide>
</package>`;
  return html
}