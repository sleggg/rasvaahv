// ==UserScript==
// @name           Unregistered Delfi comments 1st
// @namespace      delfi.ee
// @description    Redirecting URLs to see unregistered comments 
// @include        http://*.delfi.ee/*
// @include        https://*.delfi.ee/*
// ==/UserScript==

var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('&reg=1',
                                          '&reg=0');
}
