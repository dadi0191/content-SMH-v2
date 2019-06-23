simply.style('mono');
navigator.geolocation.getCurrentPosition(function(pos) {
var coords = pos.coords;
simply.text({ title: coords.latitude, subtitle: coords.longitude });
});
