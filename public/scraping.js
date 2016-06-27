//scraping:

var request = require('request'),
    cheerio = require('cheerio');

var urls = [];

request('https://freedomofanimals.com', function(err, resp, body){
  if(!err && resp.statusCode== 200) {
    var $ = cheerio.load(body);

    // $('span.comhead').each(function(i, element){
    //   var a = $(this).prev();
    //   console.log(a.text());


    $('a', '#col-main').each(function(index) {
      var url = this.attribs.href;
      // console.log(url);
    });
//cheerio allows you to implement core jQuery designed specifically for the server.
//var $ is a standard so that it feels more like jQuery
    // $('a.product-link', '#col-main').each(function() {
    //   var url = this.attr("href");
    //   console.log(url);
    //   urls.push(url);
    // });
//call all items that have the class product-link
//and live under the context of id col-main
// console.log(urls);
  }
});

//checkout the github/mikeal/request for all of the things you can do with request.
