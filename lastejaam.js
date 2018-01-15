// ==UserScript==
// @name           sounds@lastejaam
// @namespace      http://lastejaam.err.ee/
// @description    Disables annoying mouse-over sounds on lastejaam.err.ee page
// @include        http://lastejaam.err.ee/*
// ==/UserScript==

shutemup();

// also shutemup new dynamically added content
new MutationObserver(shutemup).observe(document, {subtree: true, childList: true});

function shutemup() {
    var badsound = document.getElementsByClassName('has-sound');
    for (var i = badsound.length; --i >= 0; ) {
        var el = badsound[i];
        var src = el.getAttribute('data-sound');
        if (src) {
            el.src = src;
            el.removeAttribute('data-sound');
            el.classList.remove('has-sound');
        }
    }
}
