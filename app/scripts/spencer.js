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
	$('.drink-items').append(_.template($('#menu-template').text())(food));
});
// drinks.forEach(function (food) {
// 	if (food.item = "Coffee") { 
// 		$('.drink-items').append(_.template($('#coffee-template').text())(food));
// } else {
// 		$('.drink-items').append(_.template($('#menu-template').text())(food));
// });

toppings.forEach(function (food) {
$('.topping-items').append(_.template($('#menu-template').text())(food));
});

desserts.forEach(function (food) {
$('.dessert-items').append(_.template($('#menu-template').text())(food));
});

veraDesserts.forEach(function (food) {
$('.v-dessert-items').append(_.template($('#menu-template').text())(food));
});

















