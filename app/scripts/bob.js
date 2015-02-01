
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
var newsAPI = 'http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/news/latest';
$.getJSON(newsAPI)
.done(function (data) {
  fullNewsPost = data.post + ' <a href="#" class="collapse">Show Less</a>';
  shortNewsPost = data.post = clampText(data.post, 105);
  $('article.news h2').after(latestNewsTemplate(data));
})
.fail(function (jqXHR) {
  var msg = 'Error retrieving data from server. ';
  $('article.news').prepend('<p class="error">' + msg + '</p>');
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

var flyoutLeft = $('.flyout-left'),
    handleLeft = $('.flyout-left .handle');

handleLeft.on('click', function () {
  flyoutLeft.toggleClass('flyout-left-open');
  if (flyoutLeft.hasClass('flyout-left-open')) {
    handleLeft.html('<span>R</span><i class="fa fa-chevron-left"></i>');
  } else {
    handleLeft.html('<span>R</span><i class="fa fa-chevron-right"></i>');
  };
});


