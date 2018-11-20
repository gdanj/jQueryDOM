// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
$(document).ready(function() {

	//A l'ouverture
	$('.category-todo').hide(); //Hide all tabs
	$('.tab-link:first').addClass('active'); //Activate the first tab
	$(".category-todo:first").fadeIn(); //Display first category
  $("#myDropdown").hide(); // Hide dropdown
	//Au clic
	$('.tab-link').on('click',function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		$('.active').removeClass('active'); //Desactivate the previous tab
 		$(this).addClass('active'); //Activate the right tab
		$('.category-todo').hide(); //Hide all tabs
	 	$("#category-todo-"+e.target.id).fadeIn(); //Display the right category
	})

  // Dropdown

	$(".rounded-circle").on({
    mouseenter: function () {
      $("#myDropdown").show();
    },
    mouseleave: function () {
      $("#myDropdown").hide();
    }
});


	// carrousel
	var carrousel = document.querySelector('.carrousel')
	var carrito = document.querySelector('.carrousel-images')

	var imagenActual = 0

	var cantidadImagenes = document.querySelectorAll('.carrousel img').length

	document.querySelector('button.prev').addEventListener('click', function () {
	  if (imagenActual > 0) {
	    imagenActual--
	  } else {
	    imagenActual = cantidadImagenes - 1
	  }
	    carrito.style.transform = 'translateX(' + (-carrousel.offsetWidth * imagenActual) + 'px)';
	})

	document.querySelector('button.next').addEventListener('click', function () {
	  if (imagenActual < (cantidadImagenes - 1)) {
	    imagenActual++
	  } else {
	    imagenActual = 0
	  }
	  carrito.style.transform = 'translateX(' + (-carrousel.offsetWidth * imagenActual) + 'px)';
	})

	carrito.addEventListener('transitionend', function () {
	  console.log('fin de la transition')
	})

});
