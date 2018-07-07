"use strict";

/**
 * Automatic generated by "launcher.build.js"
 * */
~function () {
    var libURL = /**/"dist/lib.js"; //*/'';
    var supportURL = /**/"dist/support.js"; //*/'';
    window['PXER_VERSION'] = /**/"7.0.9"; //*/'';

    Promise.resolve().then(function () {
        var script = document.createElement('script');
        return new Promise(function (resolve, reject) {
            script.onload = resolve;
            script.onerror = reject;
            script.src = window['PXER_URL'] + libURL;
            document.documentElement.appendChild(script);
        });
    }).then(function () {
        var script = document.createElement('script');
        return new Promise(function (resolve, reject) {
            script.onload = resolve;
            script.onerror = reject;
            script.src = window['PXER_URL'] + supportURL;
            document.documentElement.appendChild(script);
        });
    });
}();