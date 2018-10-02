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

        injectScript.src = chrome.extension.getURL("inject/editor.js");
    }

    function injectLangTools() {
        if (this.readyState !== undefined && this.readyState !== 'complete') return;
        
        var aceLangTools = document.createElement("script");
        aceLangTools.onload = injectAce;
        document.head.appendChild(aceLangTools);
    
        aceLangTools.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ext-language_tools.js";
    }

    var aceScript = document.createElement("script");
    aceScript.onload = injectLangTools;
    document.head.appendChild(aceScript);

    aceScript.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.js";
})()
