ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/currentpsalm(.*?)(<\/h3>/)[1];simply.title(headline);});