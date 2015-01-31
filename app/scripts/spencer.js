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
var search_results;
var img_urls;

$.ajax({
  dataType: "jsonp", 

  url: instagram,

  success: function (data) {
  	search_results = data;

  	img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
  	});

  	for (var i = 1; i < 5; i++) {
  		var img = '<li><a href="#">' + '<img src="' + img_urls[i] + '"/>' + '</a></li>';

  	  $('.instagram-image-bar').append(img);
  	}
  }
});


// MENU ACCORDION
if($(window).width() > 768){

// Hide all but first tab content on larger viewports
$('.accordion__content:not(:first)').hide();

// Activate first tab
$('.accordion__title:first-child').addClass('active');

} else {
  
// Hide all content items on narrow viewports
$('.accordion__content').hide();
};

// Wrap a div around content to create a scrolling container which we're going to use on narrow viewports
$( ".accordion__content" ).wrapInner( "<div class='overflow-scrolling'></div>" );

// The clicking action
$('.accordion__title').on('click', function() {
$('.accordion__content').hide();
$(this).next().show().prev().addClass('active').siblings().removeClass('active');
});

















