$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		nav: true,
		navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
		singleItem: true,
		responsive: {
			0: {
				autoplayTimeout: 15000
			},

			768: {
				autoplayTimeout: 7000
			}
		}
	});
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active')
		$('body').toggleClass('lock');
	});
});

$('.header-menu__link').on('click', function () {
	let currTab = $(this).parent().index();

	$('.header-menu__link').removeClass('active');
	$(this).addClass('active');

	$('.header__link').removeClass('active');
	$('.header__link').eq(currTab).addClass('active');
});