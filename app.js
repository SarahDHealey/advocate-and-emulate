
jQuery(document).ready(function ($) {
  fun1();
  fun2();
  fun3();
  fun4();
  fun5();
  fun6();
  fun7();
  fun8();
  fun9();
  fun10();
  fun11();
  fun12();
  fun13();
  fun14();
  fun15();
  fun16();
  fun17();
  fun18();
  // fun19();
  });

//ajax calls:

    var fun1 = function() {

    $.ajax({
        url: "https://api.instagram.com/v1/tags/cat/media/recent?access_token=245508994.f6b7f6d.a9a85308fa354d4aa02a4456b1da504e",
        dataType: "jsonp", // this is important to circumvent cross-domain issues
        cache: false,
        success: function (response) {
            // var html =
            //     '<div class="row">'+
            //     '<a href="' + response.thumbnail_url + '" >'+
            //     '<img src="' + response.thumbnail_url + '" alt="thumbnail" /></a>'+
            //     '<p>Author : ' + response.author_name + '<br />'+
            //     'Author\'s ID: ' + response.author_id + '<br />'+
            //     'Title : ' + response.title + '</p></div>';
            // $("#container").html(html);
            console.log(response);
        },
        error: function () {
            $("#container").html("<p>There was an error in the ajax call</p>");
        }
    });
  };

//     var myDate = new Date();
//     var myDateString;
//     // var t = myDate.toString('yyyy-MM-dd');
//     // console.log(t);
//     myDateString = "&Timestamp=" + myDate.getFullYear() + '-' + ('0' + (myDate.getMonth()+1)).slice(-2) + '-' + ('0' + myDate.getDate()).slice(-2) + 'T' + myDate.getUTCHours() + ("%3A" + myDate.getUTCMinutes()) + ("%3A" + myDate.getUTCSeconds()) + ("." + myDate.getUTCMilliseconds() + "Z");
//     myDateString = myDateString.trim();
//     console.log(myDateString);
// var amazonUrl = "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJ37BTWOQ7ASAGWTQ&AssociateTag=emulateandadv-20&Keywords=The%20Elephant%20Pants&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Signature=KgPZOSJWIvMqm30PFiZOr1YP8Num8TqmnosU47vhqJE%3D";
//
// console.log(amazonUrl + myDateString);

// $.ajax({url:
//   // crossDomain: false
// }).done(function( data ) {
//     console.log(data);
//   });

  //   var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJ37BTWOQ7ASAGWTQ&AssociateTag=emulateandadv-20&Keywords=The%2520Elephant%2520Pants&Operation=ItemSearch&ResponseGroup=Images%252CItemAttributes%252COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2016-06-22T18%253A49%253A01.000Z&Signature=gI18mZqhrMJuiflDjGOue6WqWCWljqX52nrPJ%252B%252FofCw%253D",
  //   "method": "GET",
  //   "headers": {
  //     // "x-requested-with": "text/html",
  //     "cache-control": "no-cache",
  //     "postman-token": "e83f461d-8775-f62e-ccdb-46e096fb3feb"
  //   }
  // };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });
  var fun2 = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=donate+National+Parks+Mesh+Hat&offset=0&limit=10",
      // dataType: "jsonp", // this is important to circumvent cross-domain issues
      // cache: false,
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
        });
      }});
    };

var fun3 = function() {
      $.ajax({
          url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=donate+revisit+iphone&offset=0&limit=10",
          // dataType: "jsonp", // this is important to circumvent cross-domain issues
          // cache: false,
          success: function (response) {
            var responseArray = response.products;
            var imagesArray = [];
            var productArray = [];
            responseArray.forEach(function(element) {
              imagesArray.push(element.image.sizes);
              productArray.push(element);
            });
            productArray.forEach(function(element){
              $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
            });
          }});
        };

var fun4 = function() {
  $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Pendleton+Parks+Buffalo&offset=0&limit=10",
      // dataType: "jsonp", // this is important to circumvent cross-domain issues
      // cache: false,
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
        });
      }});
    };

var fun5 = function() {
      $.ajax({
          url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=zoe+oceana+donate&offset=0&limit=10",
          // dataType: "jsonp", // this is important to circumvent cross-domain issues
          // cache: false,
          success: function (response) {
            var responseArray = response.products;
            var imagesArray = [];
            var productArray = [];
            responseArray.forEach(function(element) {
              imagesArray.push(element.image.sizes);
              productArray.push(element);
            });
            productArray.forEach(function(element){
              $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
            });
          }});
        };

var fun6 = function() {
          $.ajax({
              url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=canada+goose+donate&offset=0&limit=10",
              // dataType: "jsonp", // this is important to circumvent cross-domain issues
              // cache: false,
              success: function (response) {
                var responseArray = response.products;
                var imagesArray = [];
                var productArray = [];
                responseArray.forEach(function(element) {
                  imagesArray.push(element.image.sizes);
                  productArray.push(element);
                });
                productArray.forEach(function(element){
                  $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                });
              }});
            };

            var fun7 = function() {

              $.ajax({
                  url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=african+wildlife+cards&offset=0&limit=10",
                  // dataType: "jsonp", // this is important to circumvent cross-domain issues
                  // cache: false,
                  success: function (response) {
                    var responseArray = response.products;
                    var imagesArray = [];
                    var productArray = [];
                    responseArray.forEach(function(element) {
                      imagesArray.push(element.image.sizes);
                      productArray.push(element);
                    });
                    productArray.forEach(function(element){
                      $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                    });
                  }});
                };

var fun8 = function() {
    $.ajax({
        url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Toms+oceana+donate&offset=0&limit=10",
        // dataType: "jsonp", // this is important to circumvent cross-domain issues
        // cache: false,
        success: function (response) {
          var responseArray = response.products;
          var imagesArray = [];
          var productArray = [];
          responseArray.forEach(function(element) {
            imagesArray.push(element.image.sizes);
            productArray.push(element);
          });
          productArray.forEach(function(element){
            $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
          });
        }});
      };

        // $.ajax({
        //     url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=protect+the+sea&offset=0&limit=10",
        //     // dataType: "jsonp", // this is important to circumvent cross-domain issues
        //     // cache: false,
        //     success: function (response) {
        //       var responseArray = response.products;
        //       var imagesArray = [];
        //       var productArray = [];
        //       responseArray.forEach(function(element) {
        //         imagesArray.push(element.image.sizes);
        //         productArray.push(element);
        //       });
        //       productArray.forEach(function(element){
        //         $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
        //       });
        //     }});
var fun9 = function() {
            $.ajax({
                url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=havaianas+conservation&offset=0&limit=10",
                // dataType: "jsonp", // this is important to circumvent cross-domain issues
                // cache: false,
                success: function (response) {
                  var responseArray = response.products;
                  var imagesArray = [];
                  var productArray = [];
                  responseArray.forEach(function(element) {
                    imagesArray.push(element.image.sizes);
                    productArray.push(element);
                  });
                  productArray.forEach(function(element){
                    $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                  });
                }});
              };

var fun10 = function() {
        $.ajax({
            url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=save+the+sharks+donate&offset=0&limit=10",
            // dataType: "jsonp", // this is important to circumvent cross-domain issues
            // cache: false,
            success: function (response) {
              var responseArray = response.products;
              var imagesArray = [];
              var productArray = [];
              responseArray.forEach(function(element) {
                imagesArray.push(element.image.sizes);
                productArray.push(element);
              });
              productArray.forEach(function(element){
                $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
              });
            }});
          };

var fun11 = function() {
            $.ajax({
                url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=protect+the+wolves+donate&offset=0&limit=10",
                // dataType: "jsonp", // this is important to circumvent cross-domain issues
                // cache: false,
                success: function (response) {
                  var responseArray = response.products;
                  var imagesArray = [];
                  var productArray = [];
                  responseArray.forEach(function(element) {
                    imagesArray.push(element.image.sizes);
                    productArray.push(element);
                  });
                  productArray.forEach(function(element){
                    $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                  });
                }});
              };

var fun12 = function() {
                $.ajax({
                    url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=animal+planet+donate&offset=0&limit=10",
                    // dataType: "jsonp", // this is important to circumvent cross-domain issues
                    // cache: false,
                    success: function (response) {
                      var responseArray = response.products;
                      var imagesArray = [];
                      var productArray = [];
                      responseArray.forEach(function(element) {
                        imagesArray.push(element.image.sizes);
                        productArray.push(element);
                      });
                      productArray.forEach(function(element){
                        $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                      });
                    }});
                  };

                  var fun13 = function() {
        $.ajax({
            url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+womens&offset=0&limit=10",
            // dataType: "jsonp", // this is important to circumvent cross-domain issues
            // cache: false,
            success: function (response) {
              var responseArray = response.products;
              var imagesArray = [];
              var productArray = [];
              responseArray.forEach(function(element) {
                imagesArray.push(element.image.sizes);
                productArray.push(element);
              });
              productArray.forEach(function(element){
                $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
              });
            }});
          };


          var fun14 = function() {
        $.ajax({
            url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+mens&offset=0&limit=10",
            // dataType: "jsonp", // this is important to circumvent cross-domain issues
            // cache: false,
            success: function (response) {
              var responseArray = response.products;
              var imagesArray = [];
              var productArray = [];
              responseArray.forEach(function(element) {
                imagesArray.push(element.image.sizes);
                productArray.push(element);
              });
              productArray.forEach(function(element){
                $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
              });
            }});
          };


          var fun15 = function() {
        $.ajax({
            url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+kids&offset=0&limit=10",
            // dataType: "jsonp", // this is important to circumvent cross-domain issues
            // cache: false,
            success: function (response) {
              var responseArray = response.products;
              var imagesArray = [];
              var productArray = [];
              responseArray.forEach(function(element) {
                imagesArray.push(element.image.sizes);
                productArray.push(element);
              });
              productArray.forEach(function(element){
                $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
              });
            }});
          };


          var fun16 = function() {
            $.ajax({
                url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=uncommongoods+WWF&offset=0&limit=10",
                // dataType: "jsonp", // this is important to circumvent cross-domain issues
                // cache: false,
                success: function (response) {
                  var responseArray = response.products;
                  var imagesArray = [];
                  var productArray = [];
                  responseArray.forEach(function(element) {
                    imagesArray.push(element.image.sizes);
                    productArray.push(element);
                  });
                  productArray.forEach(function(element){
                    $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                  });
                }});
              };


              var fun17 = function() {
            $.ajax({
                url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=mark+drury&offset=0&limit=10",
                // dataType: "jsonp", // this is important to circumvent cross-domain issues
                // cache: false,
                success: function (response) {
                  var responseArray = response.products;
                  var imagesArray = [];
                  var productArray = [];
                  responseArray.forEach(function(element) {
                    imagesArray.push(element.image.sizes);
                    productArray.push(element);
                  });
                  productArray.forEach(function(element){
                    $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
                  });
                }});
              };


              var fun18 = function() {
        $.ajax({
            url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Wildlife+fund+game&offset=0&limit=10",
            // dataType: "jsonp", // this is important to circumvent cross-domain issues
            // cache: false,
            success: function (response) {
              var responseArray = response.products;
              var imagesArray = [];
              var productArray = [];
              responseArray.forEach(function(element) {
                imagesArray.push(element.image.sizes);
                productArray.push(element);
              });
              productArray.forEach(function(element){
                $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
              });
            }});
          };


  //         var fun19 = function() {
  //         $.ajax({
  //             url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=endangered&offset=0&limit=10",
  //             // dataType: "jsonp", // this is important to circumvent cross-domain issues
  //             // cache: false,
  //             success: function (response) {
  //               var responseArray = response.products;
  //               var imagesArray = [];
  //               var productArray = [];
  //               responseArray.forEach(function(element) {
  //                 imagesArray.push(element.image.sizes);
  //                 productArray.push(element);
  //               });
  //               productArray.forEach(function(element){
  //                 $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.XLarge.url + "'>"));
  //               });
  //       },
  //       error: function () {
  //           $("#container").html("<p>There was an error in the ajax call</p>");
  //       }
  //   });
  // };

 // ready
