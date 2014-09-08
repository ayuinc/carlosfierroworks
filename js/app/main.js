$(document).ready(function(){
	// INITIALIZE ISOTOPE
	var $container = $(".isotope-container");
	$container.isotope({
		"itemSelector": ".isotope-item"
	});

	// SETUP FILTERS
	$('.nav-project-grid-filters li a').on( 'click', function(e) {
		e.preventDefault();
		$('.nav-project-grid-filters li a').removeClass("active");
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

	// NAV ITEMS MINIGRID HOVER HIGHLIGHT
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
			$projectsGrid.addClass("on-highlight");
			$projectItem.removeClass("on-highlight");
		}
	});

	$($projectMiniGridItem).on("mouseleave", function(){
		$projectsGrid.removeClass("on-highlight").removeClass("highlighted");
	});
});



















