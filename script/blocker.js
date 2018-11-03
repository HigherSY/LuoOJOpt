function blockRequest(details) {
    return {
        cancel: true
    };
}

function updateFilters() {
    if (browser.webRequest.onBeforeRequest.hasListener(blockRequest)) {
        return;
    }
    browser.webRequest.onBeforeRequest.addListener(blockRequest, {
        urls: [
            "http://luo.hustoj.com/vcode.php",
            "http://luo.hustoj.com/include/checksource.js"
        ]
    }, ['blocking']);
}

updateFilters();
