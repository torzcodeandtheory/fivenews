$(document).ready(function () {
	navFixed();
	mobileMenu();
	topmobileMenu();
	radioPlay();
	socialTab();

	setTimeout(function () {
		sentiMeter();
	}, 3000);

	$('.searchBtn').on('click', function () {
		$(this).parent('span').toggleClass('open')
	});
});

function navFixed() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 110) {
			$('header.main').addClass('fixed');
		} else if ($(this).scrollTop() < 110) {
			$('header.main').removeClass('fixed');
		}
	});
}

function mobileMenu() {
	$('.burgermenu').on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.main-nav').removeClass('slideDown');
		} else {
			$(this).addClass('open');
			$('.main-nav').addClass('slideDown');
		}
	});
}

function topmobileMenu() {
	$('.topnav').on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).children('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
			$('.topbar').removeClass('slideDown');
		} else {
			$(this).addClass('open');
			$(this).children('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
			$('.topbar').addClass('slideDown');
		}
	});
}

function radioPlay() {
	$('.play-radio').on('click', function () {
		if ($(this).hasClass('playing')) {
			$(this).removeClass('playing');
			$(this).children('i').removeClass('fa-pause').addClass('fa-play');
			$('#radio').get(0).pause();
		} else {
			$(this).addClass('playing');
			$(this).children('i').removeClass('fa-play').addClass('fa-pause');
			$('#radio').get(0).play();
		}
	});
}

function socialTab() {
	$('.social-sidebar-tab h2').each(function () {
		$(this).on('click', function () {
			var getId = $(this).attr('id');
			//console.log(getId);
			if ($(this).hasClass('active')) {
				return false;
			} else {
				$(this).addClass('active');
				$(this).siblings('h2').removeClass('active');
				$('.' + getId).addClass('active');
				$('.' + getId).siblings('div').removeClass('active');
			}
		});
	});
}

function sentiMeter() {
	$('.bar').each(function () {
		var level = $(this).attr('data-rate'),
			rated = (level / 100) * 200;
		$(this).animate({
			height: rated + 'px'
		});
		$(this).siblings('.status').children('.status-rate').text(level + '%');

	});
}
