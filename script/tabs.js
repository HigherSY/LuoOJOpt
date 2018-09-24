'use strict';
(function () {
    //$('marquee').remove();

    var sStor = window.sessionStorage;
    var vcodeImg = $('img[src="vcode.php"]');

    if (window.location.pathname == "/loginpage.php") {
        vcodeImg.attr('src', 'vcode.php?go');
        sStor.setItem('vcode', "");
        return;
    }

    if (vcodeImg.length > 0) {
        vcodeImg.attr('src', 'favicon.ico');
    }
})()