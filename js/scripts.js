$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$('.js-scroll').on('click', function (e) {
		e.preventDefault();

		var id = $(this).attr('href');

		$('html, body').animate({ scrollTop: $(id).offset().top }, 500);
	});

	$('.footer--input').on({
		focus: function () {
			$(this).attr('data-placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		},

		blur: function () {
			$(this).attr('placeholder', $(this).attr('data-placeholder'));
			$(this).attr('data-placeholder', '');
		}
	});

});