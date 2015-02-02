
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

