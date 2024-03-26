$(document).ready(function () {
  //cambiar color letra
  $(".to-change-color").on("dblclick", function () {
    $(this).css({
      "color": "red"
    });
  });
  //ocultar y mostrar card text
  $('.card-title').click(function () {
    $(this).siblings(".multi-collapse").toggle(1000);
  });
  //Aplicar Smooth scroll al pinchar en los links
  $("a.link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  /*
  mostrar alerta y ocultarlo después de 4 segundos
  */
  $("#enviarCorreo").on("click", function () {
    $("#alert").addClass("d-block");
    $("#alert").removeClass("d-none");
    setTimeout(function () {
      $("#alert").addClass("d-none");
      $("#alert").removeClass("d-block");
    }, 4000);
  });
});