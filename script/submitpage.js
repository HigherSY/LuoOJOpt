'use strict';
(function () {
    var sStor = window.sessionStorage;
    var vcodeInput = document.getElementById("vcode");

    vcodeInput.value = sStor.getItem('vcode');
    document.getElementById("language").selectedIndex = 1;

    document.getElementById("frmSolution").onsubmit = null;
    document.getElementById("language").onchange = null;

    var source = document.getElementById("source");
    source.style.display = "none";
    var ide = document.createElement('div');
    ide.id = "lg-ide-body";
    ide.innerHTML = '<pre name="code" id="code" class="lg-ide-pre"></pre>';
    source.parentElement.insertBefore(ide,source);


    function injectAce() {
        if (this.readyState !== undefined && this.readyState !== 'complete') return;

        var injectScript = document.createElement("script");
        document.head.appendChild(injectScript);

        injectScript.src = chrome.extension.getURL("inject/editor.js");
    }

    var aceScript = document.createElement("script");
    aceScript.onload = injectAce;
    document.head.appendChild(aceScript);

    aceScript.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.js";
})()
