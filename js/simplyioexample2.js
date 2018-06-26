ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/currentpsalm(.*?)<\/h3>/)[1];
var headline2 = headline.split(">");simply.title(headline2);});