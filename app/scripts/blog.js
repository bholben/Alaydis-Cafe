
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

