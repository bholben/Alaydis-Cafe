
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

