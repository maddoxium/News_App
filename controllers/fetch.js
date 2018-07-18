


var request = require('request');
var cheerio = require('cheerio');
var url = "http://www.foxnews.com/"
request('http://www.foxnews.com/', function (error, response, html){
    var $ = cheerio.load(html);
    var headline = $('.kicker-text');
    var headlineText = headline.text();
    var realtedItem = $('.related-item')
    var realtedItemText= realtedItem.text();
   // var linkStuff = $('.m')
   // var linkStuffText= linkStuff.text();
   // I need to create code that can pull in an href for the link


    console.log(headlineText,realtedItemText)
    document.write(headlineText,realtedItemText)
})  
