
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


