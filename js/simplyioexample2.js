ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/<h3 id="currentpsalm" class="sub-featurette-heading">(.*?)(<\/h3>)[1];simply.title(headline);});