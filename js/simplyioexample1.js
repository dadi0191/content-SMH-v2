jax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
simply.title(headline);
});
