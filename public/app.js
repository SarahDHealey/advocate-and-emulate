
jQuery(document).ready(function ($) {

  $("#elephantButton").click(function(){
    $(".row").empty();
    elephantAnimalPlanet();
    elephantDavidSheldrick();
    elephantDavidSheldrickKids();
    elephantsUncommonGoods();
    elephantsMarkDrury();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });

  $("#rhinoButton").click(function(){
    $(".row").empty();
    rhinoLarissa();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });

  $("#polarBearButton").click(function(){
    $(".row").empty();
    polarBearCanadaGoose();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });

  $("#dolphinButton").click(function(){
    $(".row").empty();
    dolphins();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });

  $("#wolfButton").click(function(){
    $(".row").empty();
    wolf();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });

  $("#habitatButton").click(function(){
    $(".row").empty();
    natParks();
    habitatSimkaSol();
    potteryBarnWorldWildLifeFund();
    parksPendleton();
    habitatOceana();
    habitatWWFCards();
    habitatOceanaToms();
    habitatHavaianas();
    habitatAnimalPlanet();
    habitatWWFGame();
    habitatPhoneCase();
    habitatSeaWolves();
    $("body").animate({scrollTop: $(document).height() + $("body").height()});
  });



//ajax calls:
//****************************************************************************
//ajax calls for elephant button:
//****************************************************************************

  var elephantAnimalPlanet = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+womens&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          // $(".row").empty();
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var elephantDavidSheldrick = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+mens&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var elephantDavidSheldrickKids = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=david+sheldrick+kids&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var elephantsUncommonGoods = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=uncommongoods+WWF&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var elephantsMarkDrury = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=mark+drury&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

//****************************************************************************
//ajax calls for rhino button:
//****************************************************************************

  var rhinoLarissa = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=rhino+donate+larissa&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

//****************************************************************************
//ajax calls for polar Bear button:
//****************************************************************************

  var polarBearCanadaGoose = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=canada+goose+donate&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

//****************************************************************************
//ajax calls for dolphin button:
//****************************************************************************

  var dolphins = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=dolphin+donate+swimsuit&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

//****************************************************************************
//ajax calls for wolf button:
//****************************************************************************

  var wolf = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=protect+wolves+makeup+barneys&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

//****************************************************************************
//ajax calls for habitat button:
//****************************************************************************

  var natParks = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=donate+National+Parks+Mesh+Hat&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatSimkaSol = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=simka+Sol+Peace&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var potteryBarnWorldWildLifeFund = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=wwf+donate+mackenzie&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var parksPendleton = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Pendleton+Parks+Buffalo&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatOceana = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=zoe+oceana+donate&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatWWFCards = function() {
  $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=african+wildlife+cards&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatOceanaToms = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Toms+oceana+donate&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatHavaianas = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=havaianas+conservation&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatAnimalPlanet = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=animal+planet+donate&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatWWFGame = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=Wildlife+fund+game&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatPhoneCase = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=donate+revisit+iphone&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

  var habitatSeaWolves = function() {
    $.ajax({
      url: "https://api.shopstyle.com/api/v2/products?pid=uid8689-34352617-46&fts=sea+wolves&offset=0&limit=10",
      success: function (response) {
        var responseArray = response.products;
        var imagesArray = [];
        var productArray = [];
        responseArray.forEach(function(element) {
          imagesArray.push(element.image.sizes);
          productArray.push(element);
        });
        productArray.forEach(function(element){
          $(".row").append($("<a />").attr({class: 'clickUrl', href:element.clickUrl}).html("<img src='" + element.image.sizes.Large.url + "'>"));
        });
      }
    });
  };

});
