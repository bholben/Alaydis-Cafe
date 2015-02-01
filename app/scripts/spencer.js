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

var menuTemplate = _.template($('#menu-template').text())
var soupTemplate = _.template($('#soups-template').text())

breakfast.forEach(function (food) {
$('.breakfast-items').append(menuTemplate(food));	
});

sandwiches.forEach(function (food) {
$('.sandwich-items').append(menuTemplate(food));
});

salads.forEach(function (food) {
$('.salad-items').append(menuTemplate(food));
});

soups.forEach(function (food) {
$('.soup-items').append(soupTemplate(food));
});

drinks.forEach(function (food) {
	if (food.item == "Coffee") { 
		$('.drink-items').append(_.template($('#coffee-template').text())(food));
} else {
		$('.drink-items').append(menuTemplate(food));
	};
});

toppings.forEach(function (food) {
$('.topping-items').append(menuTemplate(food));
});

desserts.forEach(function (food) {
$('.dessert-items').append(menuTemplate(food));
});

veraDesserts.forEach(function (food) {
$('.v-dessert-items').append(menuTemplate(food));
});

//INSTAGRAM API

var instaAlaydisCafe = 'https://api.instagram.com/v1/tags/alaydiscafe/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaBreakfast = 'https://api.instagram.com/v1/tags/eggsandbacon/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaSandwich = 'https://api.instagram.com/v1/tags/amazingsandwich/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaSalads = 'https://api.instagram.com/v1/tags/amazingsalads/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaSoups = 'https://api.instagram.com/v1/tags/delicioussoup/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaDrinks = 'https://api.instagram.com/v1/tags/espresso/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaToppings = 'https://api.instagram.com/v1/tags/saladtoppings/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaDesserts = 'https://api.instagram.com/v1/tags/chocolatechipcookies/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var instaVDesserts = 'https://api.instagram.com/v1/tags/redvelvetcupcakes/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155'
var search_results;
var img_urls;

//INSTAGRAM PHOTOS FOR BREAKFAST
$.ajax({
  dataType: "jsonp",
  url: instaBreakfast,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 4; i < 5; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.breakfast-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR SANDWICHES
$.ajax({
  dataType: "jsonp",
  url: instaSandwich,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 4; i < 5; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.sandwich-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR SALADS
$.ajax({
  dataType: "jsonp",
  url: instaSalads,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 4; i < 5; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.salad-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR SOUPS
$.ajax({
  dataType: "jsonp",
  url: instaSoups,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 4; i < 5; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.soup-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR DRINKS
$.ajax({
  dataType: "jsonp",
  url: instaDrinks,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 4; i < 5; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.drink-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR TOPPINGS
$.ajax({
  dataType: "jsonp",
  url: instaToppings,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 1; i < 2; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.topping-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR DESSERTS
$.ajax({
  dataType: "jsonp",
  url: instaDesserts,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 1; i < 2; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.dessert-special').append(img)
    }
  }
});

//INSTAGRAM PHOTOS FOR V DESSERTS
$.ajax({
  dataType: "jsonp",
  url: instaVDesserts,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.standard_resolution.url;
    });

    for (var i = 1; i < 2; i++) {
      var img = '<h4>Today\'s Special!</h4>' + '<span>' + '<img class="menuPics" src="' + img_urls[i] + '"/>' + '</span>';

      $('.v-dessert-special').append(img)
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
$('.accordion__content').hide("slow");
$(this).next().show("slow").prev().addClass('active').siblings().removeClass('active');
});


//INSTAGRAM PHOTOS OF ALAYDI
$.ajax({
  dataType: "jsonp", 
  url: instaAlaydisCafe,
  success: function (data) {
    search_results = data;

    img_urls = _.map(data.data, function(d) {return d.images.low_resolution.url;
    });

    for (var i = 3; i < 4; i++) {
      var img = '<li>' + '<img src="' + img_urls[i] + '"/>' + '</li>';

      $('.meet-Linda').append(img);
    }
  }
});




















