ajax({ url: 'http://www.goi.org.uk/index.html' }, function(data){
var headline = data.match(/currentpsalm(.*?)<\/h3>/)[1];
var headline2 = headline.split(">");
var dataline = data.match(/<!-- Last built (.*?) -->/)[1];
simply.text({title: headline2[1], subtitle: 'Last built', body: dataline });});