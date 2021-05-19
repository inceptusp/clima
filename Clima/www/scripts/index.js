(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        initAd();
        navigator.splashscreen.hide();
        getWeatherLocation();
        getMapLocation();

        window.FirebasePlugin.onNotificationOpen(function (notification) {
            navigator.notification.alert(
                notification.body,         // message
                null,                      // callback
                notification.title,        // title
                'Ok'                       // buttonName
            );
            console.log(notification);
        }, function (error) {
            console.error(error);
        });
    };

    function onPause() {
        // TODO: this application has been suspended. Save the application state here.
    };

    function onResume() {
        // TODO: this application has been reactivated. Restore the state of the application here.
    };
})();