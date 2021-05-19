function FlashLight() {
    window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {
            window.plugins.flashlight.toggle(
                function () { }, // optional success callback
                function () { }, // optional error callback
            );
        } else {
            alert("Flashlight not available on this device");
        }
    });
}