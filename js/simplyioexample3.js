ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = document.getElementById("currentpsalm").innerHTML;
simply.title(headline);
});
