
var flyoutLeft = $('.flyout-left'),
    handleLeft = $('.flyout-left .handle'),
    flyoutRight = $('.flyout-right'),
    handleRight = $('.flyout-right .handle'),
    flyoutright2 = $('.flyout-right2'),
    handleRight2 = $('.flyout-right2 .handle');

handleLeft.on('click', function () {
  flyoutLeft.toggleClass('flyout-left-open');
  if (flyoutLeft.hasClass('flyout-left-open')) {
    handleLeft.html('<span>R</span><i class="fa fa-chevron-left"></i>');
  } else {
    handleLeft.html('<span>R</span><i class="fa fa-chevron-right"></i>');
  };
});

handleRight.on('click', function () {
  flyoutRight.toggleClass('flyout-right-open');
  if (flyoutRight.hasClass('flyout-right-open')) {
    handleRight.html('<i class="fa fa-chevron-right"></i>');
  } else {
    handleRight.html('<i class="fa fa-chevron-left"></i>');
  };
});

handleRight2.on('click', function () {
  flyoutRight2.toggleClass('flyout-right2-open');
  if (flyoutRight2.hasClass('flyout-right2-open')) {
    handleRight2.html('<i class="fa fa-chevron-right"></i>');
  } else {
    handleRight2.html('<i class="fa fa-chevron-left"></i>');
  };
});
