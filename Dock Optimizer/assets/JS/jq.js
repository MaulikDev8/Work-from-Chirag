$(document).ready(function () {
  $('.launch-inner-modal').click(function () {
    alert('The paragraph was clicked.');
    // $('#myModel1').modal('hide');
    setTimeout(() => {
      $('.close-custom-btn').trigger('click');
    }, 5000);
  });
});
