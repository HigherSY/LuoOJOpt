'use strict';
(function () {
    var sStor = window.sessionStorage;
    var vcodeInput = $('input[name=vcode][type=text]');

    vcodeInput.val(sStor.getItem('vcode'));
    document.getElementById("language").selectedIndex = 1;

    document.getElementById("source").style.display = "none";
    document.getElementById("frmSolution").onsubmit = null;
    document.getElementById("language").onchange = null;

    $('#source').after('<div id="lg-ide-body"><pre name="code" id="code" class="lg-ide-pre"></pre></div>');


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
