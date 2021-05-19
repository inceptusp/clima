(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Manipular eventos de pausa e retomada do Cordova
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
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
})();