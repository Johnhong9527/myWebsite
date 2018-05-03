module.exports = function(name, list) {
  function page1(list) {
    let html = '';
    for (let i in list) {
      html += `<item id="text${
        list[i].index
      }" media-type="text/x-oeb1-document" href="page/text${
        list[i].index
      }.html"></item>\n`;
    }
    return html;
  }

  function page2(list) {
    let html = '';
    for (let i in list) {
      html += `<itemref idref="text${list[i].index}"/>\n`;
    }
    return html;
  }

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
                <EmbeddedCover>../images/cover.jpg</EmbeddedCover>
            </x-metadata>
        </dc-metadata>
    </metadata>
    <manifest>
        <item id="content" media-type="text/x-oeb1-document" href="toc.html"></item>
        <item id="ncx" media-type="application/x-dtbncx+xml" href="toc.ncx"/>
          ${page1(list)}   
    </manifest>
    <spine toc="ncx">
        <itemref idref="content"/>
        ${page2(list)}
		</spine>
    <guide>
        <reference type="toc" title="Table of Contents" href="toc.html"/>
         <reference type="text" title="Book" href="text1.html"/>
    </guide>
</package>`;
  return html;
};
