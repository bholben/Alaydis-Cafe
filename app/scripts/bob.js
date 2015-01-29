

// Request the blog data for "Our Story" and receive a promise back...
$.getJSON('http://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1')

// Run a spinner setTimeout here...
.always()

// Promise resolved successfully...
.done(function (data) {
  $('section.story').append('<h2>Our Story</h2>' + data);
  // Turn off the spinner
})

// Promise resolution failed...
.fail(function (jqXHR, textStatus, errorThrown) {
  console.log(jqXHR);
  console.log(textStatus);
  console.log(errorThrown);
  // Turn off the spinner
});

// var ourStory = _.findWhere(blogs, {'title': 'Our Story'});
// $('section.story').append(ourStory.text);

