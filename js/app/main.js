$(document).ready(function(){
	// INITIALIZE ISOTOPE
	var $container = $(".isotope-container").imagesLoaded( function() {
	  $container.isotope({
	    // options
			"itemSelector": ".isotope-item"
	  });
	});

	// SETUP PROJECT FILTERS
	$('.nav-project-grid-filters li a').on( 'click', function(e) {
		e.preventDefault();
		$('.nav-project-grid-filters li a').removeClass("active");
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	  // addClass Active 
	  $(this).toggleClass("active");
	});

	// SETUP PRESS FILTERS
	$('.nav-press-grid-filters li a').on( 'click', function(e) {
		e.preventDefault();
		$('.nav-press-grid-filters li a').removeClass("active");
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	  // addClass Active 
	  $(this).toggleClass("active");
	});

	// NAV PROJECT ITEMS MINI GRID
		// Objetivo:
		// Crear los items correspondientes al numero de isotope-items del grid de proyectos
		// Colorear los items del mini-grid segun la clase correspondiente

	var $projectGridItems = $(".isotope-container .isotope-item"),
			$projectGridItemsCount = $projectGridItems.length,
			$projectMiniGrid = $(".nav-project-items-mini-grid");

	$.each($projectGridItems, function(index, item){
		var $minigridItems = "<li class='" + $(item).data("minigrid") + "'><a href='#'></a></li>";
		$projectMiniGrid.append($minigridItems);
	});

	// NAV PRESS ITEMS MINI GRID
		// Objetivo:
		// Crear los items correspondientes al numero de isotope-items del grid de proyectos
		// Colorear los items del mini-grid segun la clase correspondiente

	var $pressGridItems = $(".isotope-container .isotope-item"),
			$pressGridItemsCount = $pressGridItems.length,
			$pressMiniGrid = $(".nav-press-items-mini-grid");

	$.each($pressGridItems, function(index, item){
		var $minigridItems = "<li class='" + $(item).data("minigrid") + "'><a href='#'></a></li>";
		$pressMiniGrid.append($minigridItems);
	});

	// NAV PROJECT ITEMS MINIGRID HOVER HIGHLIGHT
		/* Objetivo:
			Al hacer hover en cualquiera de los minigrid items, evaluar su index del array y hacer
			match con su representacion correspondiente en el grid grande, si estos hacen match, 
			entonces hacer highlight desvaneciendo los demas */
	var $projectMiniGridItem = $(".nav-project-items-mini-grid li"),
			$projectsGrid = $('.projects-grid li');

	$($projectMiniGridItem).on("mouseover", function(){
		var $minigridIndex = $(this).index(),
				$gridIndex = $($projectsGrid[$minigridIndex]).index(),
				$projectItem = $($projectsGrid[$minigridIndex]);

		if ($gridIndex === $minigridIndex) {
			$projectItem.addClass("highlighted");
			$projectItem.removeClass("on-highlight");
		}
	});

	$($projectMiniGridItem).on("mouseleave", function(){
		$projectsGrid.removeClass("on-highlight").removeClass("highlighted");
	});

	// THE SAME BUT FOR PROJECTS GRID
	$($projectsGrid).on("mouseover", function(){
		var $gridIndex = $(this).index(),
				$miniGridIndex = $($projectMiniGridItem[$gridIndex]).index(),
				$projectItem = $($projectMiniGridItem[$gridIndex]);

		if ($miniGridIndex === $gridIndex) {
			$projectItem.find('a').addClass("active");			
		}
	});

	$($projectsGrid).on("mouseleave", function(){
		$projectMiniGridItem.find('a').removeClass("active");
	});

	// NAV PRESS ITEMS MINIGRID HOVER HIGHLIGHT
		/* Objetivo:
			Al hacer hover en cualquiera de los minigrid items, evaluar su index del array y hacer
			match con su representacion correspondiente en el grid grande, si estos hacen match, 
			entonces hacer highlight desvaneciendo los demas */
	var $pressMiniGridItem = $(".nav-press-items-mini-grid li"),
			$pressGrid = $('.press-grid li');

	$($pressMiniGridItem).on("mouseover", function(){
		var $minigridIndex = $(this).index(),
				$gridIndex = $($pressGrid[$minigridIndex]).index(),
				$pressItem = $($pressGrid[$minigridIndex]);

		if ($gridIndex === $minigridIndex) {
			$pressItem.addClass("highlighted");			
			$pressItem.removeClass("on-highlight");
		}
	});

	$($pressMiniGridItem).on("mouseleave", function(){
		$pressGrid.removeClass("on-highlight").removeClass("highlighted");
	});

	// THE SAME BUT FOR PRESS GRID
	$($pressGrid).on("mouseover", function(){
		var $gridIndex = $(this).index(),
				$miniGridIndex = $($pressMiniGridItem[$gridIndex]).index(),
				$pressItem = $($pressMiniGridItem[$gridIndex]);

		if ($miniGridIndex === $gridIndex) {
			$pressItem.find('a').addClass("active");			
		}
	});

	$($pressGrid).on("mouseleave", function(){
		$pressMiniGridItem.find('a').removeClass("active");
	});

	// PROJECTS FLEXSLIDER
	// The slider being synced must be initialized first
	$(window).load(function(){

	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 140,
	    itemMargin: 0,
	    asNavFor: '#slider'
	  });
	   
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	  });

	  // PROJECT THUMBS COUNTER
		var $carouselSlider = $('#carousel .slides li');
		var $listItems = '';
		for (var i = 0; i < $carouselSlider.length; i++) {
			$('.thumbnail-counter').append('<li>' + (i+1) + '</li>');
		}
	});

	// PROJECTS DESCRIPTION
	$('.project-description-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('on');
		$('.project-description').toggleClass('on');
	});

	$('.project-description .scroll-down').click(function(e){
		e.preventDefault();
		$('.project-description .content').velocity({
			top: '-80%'
		}, {
			duration: 400,
	    easing: "swing",
	    queue: "",
	    begin: null,
	    progress: null,
	    complete: null,
	    loop: false,
	    delay: false,
	    display: false,
	    mobileHA: true
		});
	});
	$('.project-description .scroll-up').click(function(e){
		e.preventDefault();
		$('.project-description .content').velocity({
			top: '0'
		}, {
			duration: 400,
	    easing: "swing",
	    queue: "",
	    begin: null,
	    progress: null,
	    complete: null,
	    loop: false,
	    delay: false,
	    display: false,
	    mobileHA: true
		});
	});
});



















