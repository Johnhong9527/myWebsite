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