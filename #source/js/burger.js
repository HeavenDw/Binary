// .icon-menu - класс иконки бургера, .menu - класс меню
$('.icon-menu').click(function() {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.menu__link').click(function() {
	$('.icon-menu').removeClass('active');
	$('.menu__body').removeClass('active');
	$('body').removeClass('lock');
});