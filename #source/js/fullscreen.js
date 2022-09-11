function mainblock() {
		$('.mainblock').css('min-height', $(window).outerHeight());
	}
	$(window).resize(function(event) {
		mainblock();
	});
	mainblock();