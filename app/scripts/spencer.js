_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

// DECLARE AND ASSIGN VARIABLES

var breakfast = menu.breakfast;
var sandwiches = menu.sandwiches;
var toppings = menu.toppings;
var sides = menu.sides;
var salads = menu.salads;
var soups = menu.soups;
var drinks = menu.drinks;
var desserts = menu.desserts;
var veraDesserts = menu.veraDesserts;

// MENU TEMPLATE

breakfast.forEach(function (food) {
$('.breakfast-items').append(_.template($('#menu-template').text())(food));	
});

sandwiches.forEach(function (food) {
$('.sandwich-items').append(_.template($('#menu-template').text())(food));
});

salads.forEach(function (food) {
$('.salad-items').append(_.template($('#menu-template').text())(food));
});

soups.forEach(function (food) {
$('.soup-items').append(_.template($('#soups-template').text())(food));
});

drinks.forEach(function (food) {
	if (food.item == "Coffee") { 
		$('.drink-items').append(_.template($('#coffee-template').text())(food));
} else {
		$('.drink-items').append(_.template($('#menu-template').text())(food));
	};
});

toppings.forEach(function (food) {
$('.topping-items').append(_.template($('#menu-template').text())(food));
});

desserts.forEach(function (food) {
$('.dessert-items').append(_.template($('#menu-template').text())(food));
});

veraDesserts.forEach(function (food) {
$('.v-dessert-items').append(_.template($('#menu-template').text())(food));
});

//INSTAGRAM API

var instagram = 'https://api.instagram.com/v1/tags/alaydiscafe/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'

// $.getJSON(instagram)
// .done( function (img) {
// 	console.log(img.data.images.standard_resolution.url);
// });
var search_results;
var img_urls;

$.ajax({
  dataType: "jsonp",
  
  url: instagram,
  
  success: function (data) {
  	search_results = data;

  	img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
  	});

  	for (var i = 0; i < 5; i++) {

  		var img = '<li><a href="#">' + '<img src="' + img_urls[i] + '"/>' + '</a></li>'

  		console.log(img);

  	$('.instagram-image-bar').append(img);
  	}
  }
});

  	// for (var i = 0; i < 4; i++) {
  	// 	var img = '<a href="#"><div class="ig-card">' + 'img src=' + img_urls[i] + ' class="ig-img" />' + aside.append(img);
  
  

















