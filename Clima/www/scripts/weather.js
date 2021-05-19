var OpenWeatherAppKey = '';
var DarkSkyAppKey = '';
var Latitude = undefined;
var Longitude = undefined;
var languageMap = {
    "clear-day": "Dia limpo",
    "clear-night": "Noite limpa",
    "rain": "Chuva",
    "snow": "Neve",
    "sleet": "Chuva com neve",
    "wind": "Vento forte",
    "fog": "Neblina",
    "cloudy": "Nublado",
    "partly-cloudy-day": "Parcialmente nublado",
    "partly-cloudy-night": "Parcialmente nublado",
    "hail": "Granizo",
    "thunderstorm": "Tempestade de raios",
    "tornado": "Tornado"
};

function getWeatherLocation() {
    navigator.geolocation.getCurrentPosition
        (onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
}

var onWeatherSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getWeatherLL(Latitude, Longitude);
};

function getWeather() {
    var zipcode = $('#zip-code-input').val();
    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?q='
        + zipcode + '&appid=' + OpenWeatherAppKey + '&units=metric&lang=pt';

    getMapSearch(zipcode);

    $.getJSON(queryString, function (results) {
        showWeatherData(results);
    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#home-load').hide();
        $('#weather-data').hide();
        $('#error-msg').text("Erro ao recuperar informações. " + jqXHR.statusText);
        });
    return false;
}

function getWeatherLL(latitude, longitude) {
    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=metric&lang=pt';

    getMap(latitude, longitude);

    $.getJSON(queryString, function (results) {
        showWeatherData(results);
    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#home-load').hide();
        $('#weather-data').hide();
        $('#error-msg').text("Erro ao recuperar informações. " + jqXHR.statusText);
    });
    return false;
}

function showWeatherData(results) {

    if (results.weather.length) {
        $('#error-msg').hide();
        $('#weather-data').show();

        $('#title').text(results.name);
        $('#temperature').text(results.main.temp);
        $('#wind').text(results.wind.speed);
        $('#humidity').text(results.main.humidity);
        $('#visibility').text(results.weather[0].description);

        var sunriseDate = new Date(results.sys.sunrise * 1000);
        $('#sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.sys.sunset * 1000);
        $('#sunset').text(sunsetDate.toLocaleTimeString());

        $('#home-load').hide();

    } else {
        $('#weather-data').hide();
        $('#home-load').hide();
        $('#error-msg').show();
        $('#error-msg').text("Erro ao recuperar informações. ");
    }
}

function onWeatherError(error) {
    $('#error-msg').show();
    $('#home-load').hide();
    $('#error-msg').text("Erro ao recuperar informações de GPS");
}

function getForecastLocation() {
    navigator.geolocation.getCurrentPosition
        (onForecastSuccess, onForecastError, { enableHighAccuracy: true });
}

var onForecastSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getForecastLL(Latitude, Longitude);
};

function getForecast() {
    var zipcode = $('#forecast-input').val();
    getGeocode(zipcode);

    setTimeout(function () {
        var queryString =
            'https://api.darksky.net/forecast/'
            + DarkSkyAppKey + "/" + Latitude + ',' + Longitude
            + '?&exclude=currently,minutely,hourly,alerts,flags&lang=pt&units=ca';

        $.getJSON(queryString, function (results) {
            showForecastData(results);
        }).fail(function (jqXHR) {
            $('#error-forecast-msg').show();
            $('#forecast-load').hide();
            $('#forecast-data1').hide();
            $('#forecast-data2').hide();
            $('#forecast-data3').hide();
            $('#forecast-data4').hide();
            $('#forecast-data5').hide();
            $('#error-forecast-msg').text("Erro ao recuperar informações. " + jqXHR.statusText);
        });
    }, 1000);

    return false;
}

function getForecastLL(latitude, longitude) {
    var queryString =
        'https://api.darksky.net/forecast/'
        + DarkSkyAppKey + '/' + latitude + ',' + longitude
        + '?&exclude=currently,minutely,hourly,alerts,flags&lang=pt&units=ca';

    $.getJSON(queryString, function (results) {
        showForecastData(results);
    }).fail(function (jqXHR) {
        $('#error-forecast-msg').show();
        $('#forecast-load').hide();
        $('#forecast-data1').hide();
        $('#forecast-data2').hide();
        $('#forecast-data3').hide();
        $('#forecast-data4').hide();
        $('#forecast-data5').hide();
        $('#error-forecast-msg').text("Erro ao recuperar informações. " + jqXHR.statusText);
    });
    return false;
}

function showForecastData(results) {

    if (!results.code) {
        $('#error-forecast-msg').hide();
        $('#forecast-data1').show();

        var date = new Date(results.daily.data[0].time * 1000);
        $('#f1-title').text(date.toLocaleDateString());
        $('#f1-icon').attr('src', 'images/weather-conditions/' + results.daily.data[0].icon + '.png');
        $('#f1-resume').text(languageMap[results.daily.data[0].icon]);
        $('#f1-summary').text(results.daily.data[0].summary);
        $('#f1-temperature-high').text(results.daily.data[0].temperatureHigh);
        $('#f1-temperature-low').text(results.daily.data[0].temperatureLow);
        $('#f1-wind').text(results.daily.data[0].windSpeed);
        $('#f1-humidity').text(results.daily.data[0].humidity * 100);
        $('#f1-visibility').text(results.daily.data[0].visibility);

        var sunriseDate = new Date(results.daily.data[0].sunriseTime * 1000);
        $('#f1-sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.daily.data[0].sunsetTime * 1000);
        $('#f1-sunset').text(sunsetDate.toLocaleTimeString());

        $('#forecast-data2').show();

        var date = new Date(results.daily.data[1].time * 1000);
        $('#f2-title').text(date.toLocaleDateString());
        $('#f2-icon').attr('src', 'images/weather-conditions/' + results.daily.data[1].icon + '.png');
        $('#f2-resume').text(languageMap[results.daily.data[1].icon]);
        $('#f2-summary').text(results.daily.data[1].summary);
        $('#f2-temperature-high').text(results.daily.data[1].temperatureHigh);
        $('#f2-temperature-low').text(results.daily.data[1].temperatureLow);
        $('#f2-wind').text(results.daily.data[1].windSpeed);
        $('#f2-humidity').text(results.daily.data[1].humidity * 100);

        var sunriseDate = new Date(results.daily.data[1].sunriseTime * 1000);
        $('#f2-sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.daily.data[1].sunsetTime * 1000);
        $('#f2-sunset').text(sunsetDate.toLocaleTimeString());

        $('#forecast-data3').show();

        var date = new Date(results.daily.data[2].time * 1000);
        $('#f3-title').text(date.toLocaleDateString());
        $('#f3-icon').attr('src', 'images/weather-conditions/' + results.daily.data[2].icon + '.png');
        $('#f3-resume').text(languageMap[results.daily.data[2].icon]);
        $('#f3-summary').text(results.daily.data[2].summary);
        $('#f3-temperature-high').text(results.daily.data[2].temperatureHigh);
        $('#f3-temperature-low').text(results.daily.data[2].temperatureLow);
        $('#f3-wind').text(results.daily.data[2].windSpeed);
        $('#f3-humidity').text(results.daily.data[2].humidity * 100);

        var sunriseDate = new Date(results.daily.data[2].sunriseTime * 1000);
        $('#f3-sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.daily.data[2].sunsetTime * 1000);
        $('#f3-sunset').text(sunsetDate.toLocaleTimeString());

        $('#forecast-data4').show();

        var date = new Date(results.daily.data[3].time * 1000);
        $('#f4-title').text(date.toLocaleDateString());
        $('#f4-icon').attr('src', 'images/weather-conditions/' + results.daily.data[3].icon + '.png');
        $('#f4-resume').text(languageMap[results.daily.data[3].icon]);
        $('#f4-summary').text(results.daily.data[3].summary);
        $('#f4-temperature-high').text(results.daily.data[3].temperatureHigh);
        $('#f4-temperature-low').text(results.daily.data[3].temperatureLow);
        $('#f4-wind').text(results.daily.data[3].windSpeed);
        $('#f4-humidity').text(results.daily.data[3].humidity * 100);

        var sunriseDate = new Date(results.daily.data[3].sunriseTime * 1000);
        $('#f4-sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.daily.data[3].sunsetTime * 1000);
        $('#f4-sunset').text(sunsetDate.toLocaleTimeString());

        $('#forecast-data5').show();

        var date = new Date(results.daily.data[4].time * 1000);
        $('#f5-title').text(date.toLocaleDateString());
        $('#f5-icon').attr('src', 'images/weather-conditions/' + results.daily.data[4].icon + '.png');
        $('#f5-resume').text(languageMap[results.daily.data[4].icon]);
        $('#f5-summary').text(results.daily.data[4].summary);
        $('#f5-temperature-high').text(results.daily.data[4].temperatureHigh);
        $('#f5-temperature-low').text(results.daily.data[4].temperatureLow);
        $('#f5-wind').text(results.daily.data[4].windSpeed);
        $('#f5-humidity').text(results.daily.data[4].humidity * 100);

        var sunriseDate = new Date(results.daily.data[4].sunriseTime * 1000);
        $('#f5-sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.daily.data[4].sunsetTime * 1000);
        $('#f5-sunset').text(sunsetDate.toLocaleTimeString());

        $('#forecast-load').hide();

    } else {
        $('#forecast-load').hide();
        $('#forecast-data1').hide();
        $('#forecast-data2').hide();
        $('#forecast-data3').hide();
        $('#forecast-data4').hide();
        $('#forecast-data5').hide();
        $('#error-forecast-msg').show();
        $('#error-forecast-msg').text("Erro ao recuperar informações. ");
    }
}

function onForecastError(error) {
    $('#forecast-load').hide();
    $('#forecast-data1').hide();
    $('#forecast-data2').hide();
    $('#forecast-data3').hide();
    $('#forecast-data4').hide();
    $('#forecast-data5').hide();
    $('#error-forecast-msg').show();
    $('#error-msg').text("Erro ao recuperar informações de GPS");
}

function getGeocode(zipcode) {
    var queryString =
        'https://maps.googleapis.com/maps/api/geocode/json?address='
        + zipcode + '&key=' + GoogleApiKey;

    $.getJSON(queryString, function (results) {
        geoCode(results);
    }).fail(function (jqXHR) {
        $('#error-forecast-msg').show();
        $('#forecast-load').hide();
        $('#forecast-data1').hide();
        $('#forecast-data2').hide();
        $('#forecast-data3').hide();
        $('#forecast-data4').hide();
        $('#forecast-data5').hide();
        $('#error-forecast-msg').text("Erro ao recuperar informações. " + jqXHR.statusText);
    });
    return false;
}

function geoCode(results) {
    if (results.status === "OK") {
        Latitude = results.results[0].geometry.location.lat;
        Longitude = results.results[0].geometry.location.lng;
        if (Latitude !== results.results[0].geometry.location.lat && Longitude !== results.results[0].geometry.location.lng) {
            geoCode(results)
        }

    } else {
        $('#forecast-load').hide();
        $('#forecast-data1').hide();
        $('#forecast-data2').hide();
        $('#forecast-data3').hide();
        $('#forecast-data4').hide();
        $('#forecast-data5').hide();
        $('#error-forecast-msg').show();
        $('#error-forecast-msg').text("Erro ao recuperar informações. ");
    }
}