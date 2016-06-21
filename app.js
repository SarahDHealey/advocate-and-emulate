
jQuery(document).ready(function ($) {

//ajax calls:

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

    $.ajax({
        url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Toms+turtles&offset=0&limit=10",
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


            // $('<img />').attr({
            //   src:'some image url',
            //   width:'width in intiger',
            //   height:'integer'
            // }).appendTo($('<a />').attr({
            //   href:'somelink'
            // }).appendTo($('#someElement')));

            // var newImg = ($"")
            // $("<a>").append($"<img>")element.image.sizes.XLarge.url);
            // var newNode = ($("<img>")).attr({src: element.image.sizes.XLarge.url});
            // ('.clickUrl').append(newNode);
            // var newImg = $("<img>").attr('src', element.XLarge.url);
              // $("<a>").append(newImg);
            // // console.log(newLink);
            // $(".row").append(newLink);
            // var newImg = $("<img>").attr('src', element.image.sizes.XLarge.url);
            // console.log(newImg);
            // $(".clickUrl").html(newImg);
          });

          // imagesArray.forEach(function(element) {
          //   console.log(element.XLarge.url);
          //   var newImg = $("<img>").attr('src', element.XLarge.url);
          //     $("<a>").append(newImg);
          // });
          // imagesArray.forEach(function(element) {

          // });

          // imagesArray.forEach(function(element) {
            // console.log(element);
          // var x = response.products[0].seeMoreUrl;
            // var html =
            //     '<div class="row">'+
            //     '<a href="' + response.thumbnail_url + '" >'+
            //     '<img src="' + response.thumbnail_url + '" alt="thumbnail" /></a>'+
            //     '<p>Author : ' + response.author_name + '<br />'+
            //     'Author\'s ID: ' + response.author_id + '<br />'+
            //     'Title : ' + response.title + '</p></div>';
            // $("#container").html(html);

            // console.log(x);
        },
        error: function () {
            $("#container").html("<p>There was an error in the ajax call</p>");
        }
    });

}); // ready
