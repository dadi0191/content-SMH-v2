<html>
<head>
<title>Temperatures</title>
</head>
<body>

<script>
ajax(
var dynamicUrl = 'https://fcc-weather-api.glitch.me/api/current?lat=-33.87&lon=151.21';
$.getJSON(dynamicUrl, function(data) {
/* console.log("This is an example of a dynamic JSON file being served by a web server.")
  console.log(data);*/
  <p> data.name()</p>
  <p> data.temp()</p>
});
ajax(
var dynamicUrl = '192.168.1.116/api/Ssr-74RWMVAbFUiEUKzyyifYmpo6UEoKdT4YeFFh/sensors/13/';
$.getJSON(dynamicUrl, function(data) {
/* console.log("This is an example of a dynamic JSON file being served by a web server.")
  console.log(data);*/
  
  <p> data.state()</p>
});
</script>
</body>
</html>