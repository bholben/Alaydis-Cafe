var blogs = [
  {
    "blogID": 1,
    "title": "Our Story",
    "text": "<h2>Our Story</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida tortor ac erat placerat porta. Maecenas porta urna et orci efficitur pellentesque. Ut aliquam pretium efficitur.</p><p>Etiam rutrum lobortis malesuada. Vestibulum maximus vestibulum lorem eleifend tempor. Fusce nisl felis, faucibus a maximus scelerisque, molestie vel felis. Sed posuere purus id neque ultricies, non varius velit convallis. Fusce vulputate vestibulum tortor vitae accumsan. Nulla vel efficitur sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed augue efficitur justo ultrices ornare. Praesent dolor nunc, accumsan non nulla vitae, vulputate lacinia metus. Aenean pellentesque at eros a iaculis. Aenean non pellentesque arcu.</p><p>Nullam egestas ipsum egestas orci tempus, vitae fermentum enim fermentum. Vestibulum varius bibendum tincidunt. Donec aliquam vitae urna a volutpat. Morbi commodo ipsum nec augue viverra finibus. Etiam sit amet nulla in libero pharetra fermentum. Pellentesque sapien lacus, facilisis sed elit nec, ultricies eleifend justo. Donec id sem ac enim vestibulum facilisis. Morbi vulputate, mi et gravida convallis, nisi odio molestie dui, sit amet placerat odio justo in quam. Morbi eget eros tortor. Quisque tristique est et neque fermentum maximus. Vivamus nec dignissim velit. Pellentesque suscipit purus auctor rhoncus tincidunt.</p><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis tincidunt mi. Fusce nisi nisi, consectetur quis facilisis ac, interdum vel diam. Suspendisse rutrum lacinia nunc lobortis finibus. Pellentesque varius dapibus accumsan. Morbi commodo eleifend tellus et maximus. Mauris ut velit at eros elementum fermentum ut et eros. Ut vel laoreet nibh. Nulla ornare sapien sed ante elementum tincidunt. Nullam sit amet nibh eu dui viverra ullamcorper vitae a lectus. Duis dignissim mi id est tincidunt, hendrerit laoreet magna rutrum.</p><p>Nulla lacinia libero pharetra sem hendrerit faucibus. Morbi condimentum ante vel est feugiat elementum. Donec eget quam vestibulum, tincidunt justo pulvinar, vulputate orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla dolor sit amet leo fringilla, quis tincidunt odio venenatis. Etiam ornare felis vitae feugiat commodo. Maecenas nec magna nisi. Vestibulum sed risus felis. In sagittis dolor ipsum, eget bibendum orci sollicitudin sit amet. Nunc imperdiet justo sollicitudin pulvinar sodales. Nullam iaculis eget purus eget malesuada. Etiam eu justo metus. Sed laoreet nunc vel felis laoreet eleifend. Morbi non magna eget enim porta tincidunt. Proin id lectus ut metus dictum vestibulum sed et augue. Proin nisl lacus, mollis in erat ac, tempor posuere est.</p>",
    "author": "",
    "created_on": "",
    "modified_on": ""
  }
]



console.log('Hello from John');



console.log('Hello from Spencer');




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

