
var storyText = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis blanditiis dolores mollitia obcaecati nemo, at dolorem a neque quasi, eum minus exercitationem odio rem sequi quae! Nam libero, nulla.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, cum doloribus ea sapiente totam voluptatum, ratione itaque, alias voluptatibus hic asperiores, blanditiis veniam! Nobis consectetur itaque pariatur fugiat assumenda alias!</p>';



console.log('Hello from John');


_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };



// Change template engine settings to use {{ }} syntax.
_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };


var clampText = function (text, chars) {
  chars = chars || 115;
  return text.slice(0, chars) + '&hellip; <a href="#">Read More</a>';
};

$('.story-leader').prepend(clampText(storyText, 160));

var fullNewsPost;

// Snag the template from the markup and convert to a function that can
// accept input data.
var latestNewsTemplate = _.template($('#latestNewsTemplate').html());

// Request latest news data from API and receive a promise back...
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/news/latest')

// Run a spinner setTimeout here...
.always()

// Promise resolution successful...
.done(function (data) {

  fullNewsPost = data.post;
  data.post = clampText(data.post, 105);

  $('article.news h2').after(latestNewsTemplate(data));
  // Turn off the spinner
})

// Promise resolution failed...
.fail(function (jqXHR) {
  var msg = 'Error retrieving data from server. ';
  $('article.news').prepend(msg);
  console.log(msg + jqXHR.statusText);
  // Turn off the spinner
});


$('.blog').on('click', 'article a', function (e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target.parentNode);
});

