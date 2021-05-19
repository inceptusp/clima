document.addEventListener("init", function (event) {

    if (event.target = "main") {
        getWeatherLocation();
        getMapLocation();
    }
});

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};

var prev = function () {
    var carousel = document.getElementById('carousel');
    carousel.prev();
};

var next = function () {
    var carousel = document.getElementById('carousel');
    carousel.next();
};