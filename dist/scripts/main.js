
// Change template engine settings to use {{ }} syntax.
_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };


var menu = {
	"breakfast": [
		{
		"id": 1,
		"item": "Bagel & Egg",
		"price": 2,
		"description": "A Bagel and an Egg",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 2,
		"item": "Biscuit & Egg",
		"price": 2,
		"description": "A magnificent Biscuit filled with scrambled Egg",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 3,
		"item": "Bacon Biscuit",
		"price": 3,
		"description": "Succulent Bacon stuffed into a Biscuit",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 1
		},
		{
		"id": 4,
		"item": "Chicken Biscuit",
		"price": 3,
		"description": "Tasty Chicken stuffed Biscuit",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 1
		},
		{
		"id": 5,
		"item": "Ham Biscuit",
		"price": 3,
		"description": "Delicious Ham on a Biscuit",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 1
		},
		{
		"id": 6,
		"item": "Turkey Bacon Biscuit",
		"price": 3,
		"description": "Nothing better than Turkey and Bacon on a Biscuit",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 7,
		"item": "French Toast",
		"price": 6,
		"description": "Toast made in France",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 8,
		"item": "Salmon Croquettes",
		"price": 6,
		"description": "Salmon on a Croquette",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 9,
		"item": "Chicken & Waffles",
		"price": 8,
		"description": "like it says, Chicken and Waffles",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 10,
		"item": "French Toast Combo",
		"price": 8,
		"description": "French Toast, 2 eggs, hash browns, 2pc bacon/sausage",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	],
	"sandwiches": [
		{
		"id": 11,
		"item": "Peantbutter & Jelly",
		"price": 4,
		"description": "Peanutbutter with Jelly and/or Bananas & Honey",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 0
		},
		{
		"id": 12,
		"item": "Egg Salad",
		"price": 4,
		"description": "Egg Salad",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 13,
		"item": "Vera's Fried Beef Lettuce Slaw",
		"price": 8,
		"description": "",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 14,
		"item": "Honey Maple Ham",
		"price": 8,
		"description": "Honey Maple Ham",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 15,
		"item": "Lemon Pepper Chicken",
		"price": 8,
		"description": "Lemon Pepper Chicken",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 16,
		"item": "Spicey Turkey",
		"price": 8,
		"description": "Spicey Turkey",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 17,
		"item": "Chicken Salad",
		"price": 8,
		"description": "Chicken Salad",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 0
		},
		{
		"id": 18,
		"item": "Tuna Salad",
		"price": 8,
		"description": "Tuna Salad",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 0
		},
		{
		"id": 19,
		"item": "Chicken Sausage",
		"price": 8,
		"description": "Chicken Sausage with coleslaw",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 20,
		"item": "London Broil",
		"price": 10,
		"description": "London Broil",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	],
	"toppings": [
		{
		"id": 21,
		"item": "Cheese",
		"price": 1,
		"description": "Cheese",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 22,
		"item": "Bacon",
		"price": 1,
		"description": "Bacon",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 23,
		"item": "Avocado",
		"price": 2,
		"description": "Avacado",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 24,
		"item": "Chicken",
		"price": 3,
		"description": "Chicken",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 0
		}
	],
	"sides": [
		{
		"id": 25,
		"item": "Biscuit with Gravy",
		"price": 2,
		"description": "Biscuit with Gravy",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 26,
		"item": "Grits",
		"price": 2,
		"description": "Grits",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 1
		},
		{
		"id": 27,
		"item": "Hash Browns",
		"price": 2,
		"description": "Hash Browns",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 28,
		"item": "Fruit Bowl",
		"price": 3,
		"description": "Fruit Bowl",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		}
	],
	"salads": [
		{
		"id": 29,
		"item": "Side Salad",
		"price": 3,
		"description": "Side Salad",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 30,
		"item": "House Salad",
		"price": 6,
		"description": "House Salad",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 31,
		"item": "Chicken Caesar Salad",
		"price": 7,
		"description": "Chiken Caesar Salad",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 32,
		"item": "Chef Salad",
		"price": 7,
		"description": "Chef Salad",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 33,
		"item": "Grilled Chicken Salad",
		"price": 7,
		"description": "Grilled Chicken Salad",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 34,
		"item": "Chopped Salad",
		"price": 9,
		"description": "Chopped Salad with Turkey,Ham, and Pastrami",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	],
	"soups": [
		{
		"id": 35,
		"item": "Baked Potato",
		"price": {
			"cup": 3,
			"bowl": 5
		},
		"description": "Baked Potato",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 36,
		"item": "Broccoli Cheddar",
		"price": {
			"cup": 3,
			"bowl": 5
		},
		"description": "Broccoli & Cheddar",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 37,
		"item": "Chicken Noodle",
		"price": {
			"cup": 3,
			"bowl": 5
		},
		"description": "Chicken Noodle",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 38,
		"item": "Tortilla",
		"price": {
			"cup": 3,
			"bowl": 5
		},
		"description": "Tortilla",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 39,
		"item": "Turkey Chili",
		"price": {
			"cup": 3,
			"bowl": 5

		},
		"description": "Turkey Chili",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	],
	"drinks": [
		{
		"id": 40,
		"item": "Bottled Water",
		"price": 1,
		"description": "Bottled Water",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 41,
		"item": "Canned Soda",
		"price": 1,
		"description": "Canned Soda",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 42,
		"item": "Peach Tea",
		"price": 2,
		"description": "Peach Tea",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 43,
		"item": "Sweet Tea",
		"price": 2,
		"description": "Sweet Tea",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 44,
		"item": "Coffee",
		"price": {
			"small": 1,
			"large": 2
			},
		"description": "Coffee",
		"local fav": 0,
		"low sodium": 1,
		"under 500 cals": 1
		},
		{
		"id": 45,
		"item": "Espresso",
		"price": 4.5,
		"description": "Espresso",
		"local fav": 1,
		"low sodium": 1,
		"under 500 cals": 1
		}
	],
	"desserts": [
		{
		"id": 46,
		"item": "(3) Chocolate Chip Cookies",
		"price": 1,
		"description": "Chocolate Chip/Oatmeal Raisin Cookies",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 47,
		"item": "(3) Oatmeal Raisin Cookies",
		"price": 1,
		"description": "Chocolate Chip/Oatmeal Raisin Cookies",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 48,
		"item": "Banana Pudding",
		"price": 4,
		"description": "Banana Pudding",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 49,
		"item": "Bread Pudding",
		"price": 4,
		"description": "Bread Pudding",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 50,
		"item": "Cheesecake",
		"price": 4,
		"description": "Cheesecake",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 51,
		"item": "Key Lime Pie",
		"price": 4,
		"description": "Key Lime Pie",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	],
	"veraDesserts": [
		{
		"id": 52,
		"item": "Red Velvet Cupcakes",
		"price": 4,
		"description": "Red Velvet Cupcakes",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0

		},
		{
		"id": 53,
		"item": "Sweet Potato Pie",
		"price": 4,
		"description": "Sweet Potato Pie",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 1
		},
		{
		"id": 54,
		"item": "Pecan Pie",
		"price": 4,
		"description": "Pecan Pie",
		"local fav": 0,
		"low sodium": 0,
		"under 500 cals": 0
		},
		{
		"id": 55,
		"item": "Buttermilk Pie",
		"price": 4,
		"description": "Buttermilk Pie",
		"local fav": 1,
		"low sodium": 0,
		"under 500 cals": 0
		}
	]
}


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






















var storyText = '<p>Nestled on the 2nd floor of the historic M. Rich Building in Downtown Atlanta sits Alaydi’s Café, owned and operated by Chef Linda Alaydi.  A 20-year foodservice veteran of some of Atlanta’ most recognized brands including, Houston’s Restaurant and Morehouse College, Alaydi’s Café represents Chef Linda’s vision of a casual eatery and coffee shop that offers fresh, healthful fare in an environment that embodies charm and grace with a personal touch.  In addition to coffee, espresso, cappuccino and decadent pastries, the café menu consists of savory sandwiches and soups made fresh daily as well as breakfast served all day, from 7am – 7pm.  Designed to cater to urban professionals and the busy entrepreneur, Alaydi’s Café’s décor is quaint and accented with authentic memorabilia which ranges from classic record albums and covers to vintage phonographs and photographs.  Alaydi’s Café is the ideal place to take a break, relax, and grab a bite away from the hustle and bustle that typifies Atlanta’s downtown work life.  If catering is what you require, from lunch meetings, to corporate events Alaydi’s café is the perfect place to call to satisfy your catering needs for any occasion.</p>';



var fullNewsPost,
    shortStoryText,
    latestNewsTemplate;

var clampText = function (text, chars) {
  chars = chars || 100;
  return text.slice(0, chars) + '&hellip; <a href="#" class="expand">Show More</a>';
};

// Add story text.
$('.story div').append(clampText(storyText, 165));

// Snag the template from the markup and convert to a function that can
// accept input data.
latestNewsTemplate = _.template($('#latestNewsTemplate').html());

// Request latest news data from API and receive a promise back.
// Act on whatever is returned from the promise.
var newsAPI = 'http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/news/latest';
$.getJSON(newsAPI)
.done(function (data) {
  fullNewsPost = data.post;
  shortNewsPost = data.post = clampText(data.post, 540);
  $('article.news h2').after(latestNewsTemplate(data));
})
.fail(function (jqXHR) {
  var msg = 'Error retrieving data from server. ';
  $('article.news').append('<p>' + msg + '</p>')
                   .addClass('error-text');
  console.log(msg + jqXHR.statusText);
});


// Expand article if "Show More" is clicked.
$('.blog').on('click', 'article a.expand', function (e) {
  e.preventDefault();
  var isStory = $(e.target).parents().filter('article').hasClass('story');
  if (isStory) {
    $('article.story p').html(storyText);
  } else {
    $('article.news p').html(fullNewsPost);
  }
});



var flyoutLeft = $('.flyout-left'),
    handleLeft = $('.flyout-left .handle'),
    flyoutRightMap = $('div.map'),
    handleRightMap = $('div.map .handle'),
    flyoutRightPics = $('.pics'),
    handleRightPics = $('.pics .handle');

handleLeft.on('click', function () {
  flyoutLeft.toggleClass('flyout-left-open');
  if (flyoutLeft.hasClass('flyout-left-open')) {
    handleLeft.html('<i class="fa fa-chevron-left"></i>');
  } else {
    handleLeft.html('<i class="fa fa-chevron-right"></i>');
  };
});

handleRightMap.on('click', function () {
  flyoutRightMap.toggleClass('map-open');
  if (flyoutRightMap.hasClass('map-open')) {
    handleRightMap.html('<i class="fa fa-chevron-right"></i>');
  } else {
    handleRightMap.html('<i class="fa fa-chevron-left"></i>');
  };
});

handleRightPics.on('click', function () {
  flyoutRightPics.toggleClass('pics-open');
  if (flyoutRightPics.hasClass('pics-open')) {
    handleRightPics.html('<i class="fa fa-chevron-right"></i>');
  } else {
    handleRightPics.html('<i class="fa fa-chevron-left"></i>');
  };
});



var reservationEndPoint = 'http://tiy-atl-fe-server.herokuapp.com/collections/alaydis',
    reservationForm = $('#reservationsForm'),
    confirmReservation = $('.confirm-reservation');

reservationForm.on('submit', function (e) {
  e.preventDefault();

  var form = $(this),
      formData = {
        fullName: form.find('input[name="fullName"]').val(),
        numParty: form.find('input[name="numParty"]').val(),
        date: form.find('input[name="date"]').val(),
        notes: form.find('textarea[name="notes"]').val(),
        seatingPref: form.find('select[name="seatingPref"]').val(),
      };
      form[0].reset();

  $.post(reservationEndPoint, formData)
  .done(function (data) {
    confirmReservation
      .removeClass('hide')
      .addClass('success-text')
      .text('Reservation confirmed.  See you soon!');
  })
  .fail(function (jqXHR) {
    var msg = 'Communication or data error with server. ';
    confirmReservation
      .removeClass('hide')
      .addClass('error-text')
      .text(msg);
    console.error(msg + jqXHR.statusText);
  });

});

