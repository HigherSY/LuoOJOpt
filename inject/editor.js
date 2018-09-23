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

    function replaceOld() {
        // eAL.toggle_off("source");
        // $('script[src="edit_area/edit_area_full.js"]').remove();
        // document.getElementById("edit_area_toggle_checkbox_source").remove();
        // document.getElementById("frame_source").remove();

        document.getElementById("source").style.display = "none";

        document.getElementById("frmSolution").onsubmit = null;
        document.getElementById("Submit").onclick = doSubmit;
        document.getElementById("language").onchange = null;

        $('#source').after('<div id="lg-ide-body"><pre name="code" id="code" class="lg-ide-pre"></pre></div>');
    }

    if (typeof (ace) == "undefined") return;

    replaceOld();
    editor = ace.edit("code");
    // ace.config.set('basePath', chrome.extension.getURL("lib/ace/src-min-noconflict/"))
    editor.setTheme("ace/theme/clouds");
    editor.setFontSize(18);
    editor.session.setMode("ace/mode/c_cpp");
    editor.setValue(document.getElementById("source").value);
})()