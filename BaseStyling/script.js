$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

$(document).ready(function() {
  // Initialize the carousel
  $('.carousel').carousel({
    pause: "hover"
  });

  // Attach click event to the "control next" button
  $('.carousel-control-next').click(function() {
    $('.carousel').carousel('next');
  });

  // Attach click event to the "control previous" button
  $('.carousel-control-prev').click(function() {
    $('.carousel').carousel('prev');
  });
});