
// Change template engine settings to use {{ }} syntax.
_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };


var fullNewsPost,
    shortStoryText,
    latestNewsTemplate;

var clampText = function (text, chars) {
  chars = chars || 100;
  return text.slice(0, chars) + '&hellip; <a href="#" class="expand">Show More</a>';
};

// Add story text.
shortStoryText = clampText(storyText, 160);
$('.story div').append(shortStoryText);


// Snag the template from the markup and convert to a function that can
// accept input data.
latestNewsTemplate = _.template($('#latestNewsTemplate').html());

// Request latest news data from API and receive a promise back.
// Act on whatever is returned from the promise.
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/news/latest')
.done(function (data) {
  fullNewsPost = data.post + ' <a href="#" class="collapse">Show Less</a>';
  shortNewsPost = data.post = clampText(data.post, 105);
  $('article.news h2').after(latestNewsTemplate(data));
})
.fail(function (jqXHR) {
  var msg = 'Error retrieving data from server. ';
  $('article.news').prepend(msg);
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


// // Collapse article if "Show Less" is clicked.
// $('.blog').on('click', 'article a.collapse', function (e) {
//   e.preventDefault();
//   var isStory = $(e.target).parents().filter('article').hasClass('story');
//   if (isStory) {
//     $('article.story p').html(shortStoryText);
//   } else {
//     $('article.news p').html(shortNewsPost);
//   }
// });






