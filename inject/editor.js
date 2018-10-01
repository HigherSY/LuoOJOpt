'use strict';
(function () {
    var editor = undefined;
    var sStor = window.sessionStorage;
    var vcodeInput = $('input[name=vcode][type=text]');

    function doSubmit() {
        sStor.setItem('vcode', vcodeInput.val());

        document.getElementById("source").value = editor.getValue();
        document.getElementById("lg-ide-body").remove();
        
        document.getElementById("frmSolution").target = "_self";
        document.getElementById("frmSolution").submit();
    }

    document.getElementById("Submit").onclick = doSubmit;

    if (typeof (ace) == "undefined") return;

    editor = ace.edit("code");
    // ace.config.set('basePath', chrome.extension.getURL("lib/ace/src-min-noconflict/"))
    editor.setTheme("ace/theme/clouds");
    editor.setFontSize(18);
    editor.session.setMode("ace/mode/c_cpp");
    editor.setValue(document.getElementById("source").value);
})()