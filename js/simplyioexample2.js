ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/>Read (.*?)\(/)[1];simply.title(headline);});