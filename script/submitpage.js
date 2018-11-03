'use strict';
(function () {
    var sStor = window.sessionStorage;
    var vcodeInputs = document.getElementsByName("vcode");

    vcodeInputs[0].value = sStor.getItem('vcode');
    document.getElementById("language").selectedIndex = 1;

    document.getElementById("frmSolution").onsubmit = null;
    document.getElementById("language").onchange = null;

    var source = document.getElementById("source");
    source.id = "hide_source";
    source.style.display = "none";

    var aceSource = document.createElement('pre');
    aceSource.id = "editor";
    source.parentElement.insertBefore(aceSource,source);

    function injectAce() {
        if (this.readyState !== undefined && this.readyState !== 'complete') return;

        var injectScript = document.createElement("script");
        document.head.appendChild(injectScript);

        injectScript.src = browser.runtime.getURL("inject/editor.js");
    }

    var aceScript = document.createElement("script");
    aceScript.onload = injectAce;
    document.head.appendChild(aceScript);

    aceScript.src = browser.runtime.getURL("lib/ace-builds/src-min-noconflict/ace.js");
})()
