'use strict';
(function () {
    //$('marquee').remove();

    var sStor = window.sessionStorage;
    var vcodeImg = document.querySelector('img[src="vcode.php"]');

    if (window.location.pathname == "/loginpage.php") {
        vcodeImg.src = 'vcode.php?go';
        sStor.setItem('vcode', "");
        return;
    }

    if (vcodeImg !== null) {
        vcodeImg.src = 'favicon.ico';
    }
})()