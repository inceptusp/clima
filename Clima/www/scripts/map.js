var GoogleApiKey = '';

// Get map by using coordinates
function getMap(latitude, longitude) {
    var queryString =
        'https://maps.googleapis.com/maps/api/staticmap?center='
        + latitude + ',' + longitude + '&zoom=14&size=500x500&maptype=roadmap&scale=2&markers=color:red%7C'
        + latitude + ',' + longitude + '&key=' + GoogleApiKey;

    $('#map-img').attr('src', queryString);
}

function getMapSearch(city) {
    var queryString =
        'https://maps.googleapis.com/maps/api/staticmap?center='
        + city + '&zoom=14&size=500x500&maptype=roadmap&scale=2&key=' + GoogleApiKey;

    $('#map-img').attr('src', queryString);
}