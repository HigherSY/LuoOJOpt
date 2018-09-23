function blockRequest(details) {
    return {
        cancel: true
    };
}

function updateFilters(urls) {
    if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) {
        return;
    }
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {
        urls: [
            "http://luo.hustoj.com/vcode.php",
            "http://luo.hustoj.com/edit_area/edit_area_full.js",
            "http://luo.hustoj.com/include/checksource.js"
        ]
    }, ['blocking']);
}

updateFilters();
