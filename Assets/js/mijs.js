
document.querySelector(".bars__menu").addEventListener("click", () => {

    var line1__bars = document.querySelector(".line1__bars-menu");
    var line2__bars = document.querySelector(".line2__bars-menu");
    var line3__bars = document.querySelector(".line3__bars-menu");
    var container__menu = document.querySelector(".menu");
    
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
    
        container__menu.classList.toggle("menu__active");
        
    });

 /*Cambiar color del menu al hacer Scroll*/

 window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.querySelector("header");

    if (scroll > 100){
        header.classList.add('header_active');
    }else if (scroll < 100){
        header.classList.remove('header_active');
    }

}
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces con la clase "cargarInformacion"
    var cargarInformacionLinks = document.querySelectorAll('.cargarInformacion');
  
    // Agrega un evento clic a cada enlace
    cargarInformacionLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        //event.preventDefault(); // Evita que el enlace abra una nueva página
  
        // Obtiene los valores de los atributos de datos del enlace
        var asunto = link.getAttribute('data-asunto');
        var mensaje = link.getAttribute('data-mensaje');
  
        // Completa el formulario con los valores obtenidos
        document.querySelector('input[name="asunto"]').value = asunto;
        document.querySelector('textarea[name="mensaje"]').value = mensaje;
        document.querySelector('input[name="nombre"]').focus();
      });
    });
  });
 /* $(function(){

    $('a[href*="#"]').click(function() {
        //eliminoActive();   
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            
            var $target = $(this.hash);
            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

           }

      }


  });

});*/