cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "file": "plugins/cordova-plugin-firebase/www/firebase.js",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    },
    {
        "id": "cordova-plugin-admobpro-firebase.AdMob",
        "file": "plugins/cordova-plugin-admobpro-firebase/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro-firebase",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-flashlight.Flashlight",
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-firebase": "0.1.25",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro-firebase": "2.29.29",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-device": "2.0.1",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-geolocation": "2.4.3",
    "cordova-plugin-statusbar": "2.4.1",
    "cordova-plugin-splashscreen": "5.0.1"
};
// BOTTOM OF METADATA
});