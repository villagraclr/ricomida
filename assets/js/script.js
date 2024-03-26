$(document).ready(function() {
    $('.button').click(function() {
      $(this).siblings(".item").toggle();
    });
  });